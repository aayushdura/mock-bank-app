import React from "react";
import { useSelector } from "react-redux";

const Withdwal = () => {
  const users = useSelector((state) => state.bank.user);
  console.log(users);
  return <div>Withdrawl</div>;
};

export default Withdwal;
