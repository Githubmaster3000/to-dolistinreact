import React from "react";

function Header({ title, subTitle  }) {
  return (
    <h1 className="title">
      to do list
      <span>Get one item done at a time. </span>
    </h1>
  );
}

export default Header;
