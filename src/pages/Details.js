import React from "react";
import { useSelector } from "react-redux";
import "./details.css";

const Details = () => {
  const user = useSelector((state) => state.bank.user);
  const bank = useSelector((state) => state.bank);
  console.log(user);
  return (
    <div className="details-container">
      {user.length === 0 ? (
        <h1>Please Register</h1>
      ) : (
        <div>
          <h1>Welcome</h1>
          <h2>
            Name:
            <input disabled value={user[0]?.fullName} />
            {}
          </h2>
          <h2>
            Current Balance:
            <input disabled value={bank.balance} />
          </h2>
        </div>
      )}
    </div>
  );
};

export default Details;
