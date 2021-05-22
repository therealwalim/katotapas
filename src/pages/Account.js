import React from "react";
import Navbar from "../components/Navbar"

export default function Account(props) {
  return (
    <div>
      <Navbar />
      <div>hey {props.token}</div>
    </div>
  );
}
