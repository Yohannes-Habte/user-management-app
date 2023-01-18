import User from "../models/userModel.js";
import Token from "../models/tokenModel.js";
import crypto from "crypto";
import createError from "http-errors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import sendEmail from "../utils/sendEmail.js";

// ========================================================
// Generate token for a user
// ========================================================
const generateToken = (id) => {
  try {
    const userToken = jwt.sign({ id }, process.env.JWT, { expiresIn: "1d" });
    return userToken;
  } catch (err) {
    console.log(err);
    return next(
      createError(400, "Token could not be generated. Please try it again.")
    );
  }
};

// ========================================================
// Register New User to the backend
// ========================================================
export const registerUser = async (req, res, next) => {
  const { fullName, email, password, phone, photo, bio } = req.body;
  try {
    const user = await User.findOne({ email: email });
    // If user already exist, the error message will be...
    if (user) {
      return next(
        createError(500, "user already exists. Try a different email!")
      );
    }

    // If user does not exist ...
    if (!user) {
      const newUser = new User({
        fullName: fullName,
        email: email,
        password: password,
        phone: phone,
        photo: photo,
        bio: bio,
      });

      try {
        await newUser.save();
      } catch (err) {
        console.log(err);
        return next(
          createError(500, "User is not registered in the database!")
        );
      }

      // Token
      const token = generateToken(newUser._id);

      // Send HTTP-only cookie to the client in the frontend and also the user data
      return res
        .cookie("token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 1000 * 86400),
          sameSite: "none",
          secure: true,
        })
        .status(201)
        .json({
          user: newUser,
        });
    }
  } catch (err) {
    console.log(err);
    return next(
      createError(500, "User could not be registered! Please try again!")
    );
  }
};

// ========================================================
// Login user to the backend
// ========================================================

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return next(createError(400, "User not found. Please signup!"));
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return next(createError(400, "Invalid password. Please try again!"));
    }

    if (user && validPassword) {
      const { _id, fullName, email, phone, photo, bio } = user;

      // Token
      const token = generateToken(user._id);

      // Now, the cookies and the usere data willl be sent to the frontend
      return res
        .cookie("token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 1000 * 86400),
          sameSite: "none",
          secure: true,
        })
        .status(200)
        .json({ _id, fullName, email, phone, photo, bio, token });
    } else {
      res.status(400);
      throw new Error("Invalide Email or password");
    }
  } catch (error) {
    console.log(error);
    return next(createError(400, "User could not login. Please try again!"));
  }
};

// ========================================================
// Logout user
// ========================================================
export const logoutUser = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });
  // In order to logout the user, expire the cookie
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0), // cookie is expired
    sameSite: "none",
    secure: true,
  });

  return res
    .status(200)
    .json({ message: `${user.fullName} is successfully logout` });
};

// ========================================================
// Get a user
// ========================================================

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id); // Look at the authorizedUser function

    if (user) {
      const { _id, fullName, email, phone, photo, bio } = user;

      return res.status(200).json({ _id, fullName, email, phone, photo, bio });
    } else {
      res.status(400);
      throw new Error("User not found! Please try again!");
    }
  } catch (error) {
    console.log(error);
    next(createError(400, "Usr not found. Please try again!"));
  }
};

// ========================================================
// Get a user login stattus
// ========================================================

export const loggedinStatus = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json(false);
  }

  const VerifiedToken = jwt.verify(token, process.env.JWT);
  if (VerifiedToken) {
    return res.json(true);
  } else {
    return res.json(false);
  }
};

// ========================================================
// Update a user
// ========================================================

export const updateUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      const { fullName, email, phone, photo, bio } = user;
      user.email = email; // Email must not be edited, but the rest could be edited
      user.fullName = req.body.fullName || fullName;
      user.phone = req.body.phone || phone;
      user.photo = req.body.phophoto || photo;
      user.bio = req.body.bio || bio;

      try {
        const updatedUser = await user.save();
        return res.status(200).json({
          id: updatedUser._id,
          fullName: updatedUser.fullName,
          email: updatedUser.email,
          phone: updatedUser.phone,
          photo: updatedUser.photo,
          bio: updatedUser.bio,
        });
      } catch (error) {
        console.log(error);
        return next(
          createError(500, "Updated user is not saved in the database")
        );
      }
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    console.log(error);
  }
};

// ========================================================
// Change Password
// ========================================================

export const changePassword = async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  const user = await User.findById(req.user._id);

  if (!user) {
    return next(createError(400, "User is not found. Please signup!"));
  }

  if (!oldPassword) {
    return next(createError(400, "Please add old password!"));
  }

  if (!newPassword) {
    return next(createError(400, "Please add new password!"));
  }

  // Check if th old password matched the password in the database
  const oldPasswordValid = await bcrypt.compare(oldPassword, user.password);

  if (user && oldPasswordValid) {
    user.password = newPassword;

    try {
      await user.save();
      return res.status(200).send("Password changed successfully!");
    } catch (error) {
      console.log(err);
      return next(
        createError(400, "New password is not saved int the database!")
      );
    }
  } else {
    return next(
      createError(400, "Old password is incorrect! Please try again!")
    );
  }
};

// ========================================================
// Forgot Password
// ========================================================

export const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return next(createError(404, "User not found. Please try again!"));
    }

    // Delete token if it exists in the DB
    let token = await Token.findOne({userId: user._id});
    if(token) {
      await token.deleteOne();
    }
    // Create reset token
    let resetToken = crypto.randomBytes(32).toString("hex") + user._id;
    console.log(resetToken);

    // Hash token before saving to DB 
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    // Save Token to DB
    await new Token({
      userId: user._id,
      token: hashedToken,
      createdAt: Date.now(),
      expiresAt: Date.now() + 30 * (60 * 1000), // 30 minutes
    }).save();

    // Construct Reset URL
    const resetUrl = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;

    // Reset Email
    const message = `
    <h2> Hello ${user.fullName} </h2>
    <p> Please use the url below to reset your password </p>
    <p> This reset link is valid for onl 30 minutes. </p>
    <a href=${resetUrl} clicktracking=off> ${resetUrl} </a>
    <p> Best regards, </p>
    <p> LisaConsult Team </p>
    `;

    const subject = "Password Reset Request";
    const send_to = user.email;
    const sent_from = process.env.EMAIL_USER;

    try {
      await sendEmail(subject, message, send_to, sent_from);
      res.status(200).json({ success: true, message: "Reset Email Sent" });
    } catch (error) {
      return next(createError(500, "Email is not sent. Please try again!"));
    }
  } catch (error) {
    console.log(err);
  }
};

// ========================================================
// Reset Password
// ========================================================

export const resetPassword = async (req, res, next) => {
  const { newPassword } = req.body;
  const { resetToken } = req.params;

  try {
    // Hash token, then comapre to token in the DB
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    // Find the token in the DB
    const userToken = await Token.findOne({
      token: hashedToken,
      expiresAt: {$gt: Date.now()}
    });

    if(!userToken) {
      return next(createError(404, "Invalid or Expired token"))
    }

    // If the token is valid, then find the exact user in the DB
    const user = await User.findOne({_id: userToken.userId});
    user.password = newPassword;

    // Save the new Password
    await user.save()

    return res.status(200).json({
      message: "Password reset is successful. Please login!"
    })

  } catch (error) {
    console.log(error);
  }
}