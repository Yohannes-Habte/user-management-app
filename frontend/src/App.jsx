import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Forgot from "./views/authPages/forgotPage/Forgot";
import LoginCode from "./views/authPages/loginCodepage/LoginCode";
import Login from "./views/authPages/loginPage/Login";
import Register from "./views/authPages/registerPage/Register";
import Reset from "./views/authPages/resetPage/Reset";
import Verify from "./views/authPages/verifyPage/Verify";
import ChangePassword from "./views/changePasswordPage/ChangePassword";
import Home from "./views/homePage/Home";
import Profile from "./views/profilePage/Profile";
import Users from "./views/userListPage/Users";

export const myContext = React.createContext();

const App = () => {
  return (
    <myContext.Provider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={ <Layout> <Home /> </Layout> } />
            <Route path="/login" element={ <Login />} />
            <Route path="/register" element={ <Register />} />
            <Route path="/forgot" element={ <Forgot />} />
            <Route path="/resetPassword/:resetToken" element={ <Reset />} />
            <Route path="/loginCode/:email" element={ <LoginCode />} />
            <Route path="/profile" element={ <Layout> <Profile /> </Layout> } />
            <Route path="/verify/:verificationToken" element={ <Layout> <Verify /> </Layout> } />
            <Route path="/changePassword" element={ <Layout> <ChangePassword /> </Layout> } />
            <Route path="/users" element={ <Layout> <Users /> </Layout> } />
          </Routes>
        </Router>
      </div>
    </myContext.Provider>
  );
};

export default App;
