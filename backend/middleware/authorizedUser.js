import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const authorizedUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    // Unverified token
    if (!token) {
      res.status(401);
      throw new Error("User unauthorized! Please login!");
    }

    // Verified token
    const VerifiedToken = jwt.verify(token, process.env.JWT);
    // Get user id from the token
    const user = await User.findById(VerifiedToken.id).select("-password"); //select is used not send the user password back

    if (!user) {
      res.status(401);
      throw new Error("User not found!");
    }
    // If the user found, save the user in the req.user, which is equal to the user in the database
    req.user = user;

    // Then proceed to the next step
    next();
  } catch (err) {
    console.log(err);
  }
};
export default authorizedUser;
