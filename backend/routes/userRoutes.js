import express from "express";
import {
  changePassword,
  forgotPassword,
  getUser,
  loggedinStatus,
  loginUser,
  logoutUser,
  registerUser,
  resetPassword,
  updateUser,
} from "../controllers/userController.js";
import authorizedUser from "../middleware/authorizedUser.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/getuser", authorizedUser, getUser);
router.get("/loggedin", loggedinStatus);
router.patch("/updateUser", authorizedUser, updateUser);
router.patch("/changePassword", authorizedUser, changePassword);
router.post("/forgotPassword", forgotPassword);
router.put("/resetPassword/:resetToken", resetPassword);

export default router;
