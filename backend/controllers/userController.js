import User from "../models/userModel.js";
import createError from "http-errors";
import jwt from "jsonwebtoken";

// Generate token for a user
const generateToken = (id) => {
  let newToken;
  try {
    newToken = jwt.sign({ id }, process.env.JWT, { expiresIn: "1d" });
  } catch (err) {
    console.log(err);
    return next(
      createError(400, "Token could not be generated. Please try it again.")
    );
  }
  return newToken;
};

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
      const userToken = generateToken(newUser._id);

      return res.status(201).json({
        user: newUser,
        token: userToken
      });
    }
  } catch (err) {
    console.log(err);
    return next(
      createError(500, "User could not be registered! Please try again!")
    );
  }
};
