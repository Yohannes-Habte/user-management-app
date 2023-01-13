import React from "react";
import Menu from "../../components/pageMenu/Menu";
import Search from "../../components/search/Search";
import UserStats from "../../components/userStats/UserStats";
import "./Users.scss";
import { FaTrashAlt } from "react-icons/fa";
import ChangeRole from "../../components/changeRole/ChangeRole";

const Users = () => {
  return (
    <main className="users-page">
      <section className="users-container">
        <Menu />
        <UserStats />
        <article className="users-list">
          <div className="user-table">
            <div className="users-search">
              <h2> All Users </h2>
              <Search />
            </div>

            <table className="table">
              <thead>
                <th>Sr.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Change Role</th>
                <th> Action</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Habte</td>
                  <td>habte@gmail.com</td>
                  <td>Admin</td>
                  <td> <ChangeRole /> </td>
                  <td>
                    <span>
                      <FaTrashAlt color="red" size={20} />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Users;
