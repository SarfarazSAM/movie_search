import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <a href="/">
        <h1>{props.text}</h1>
      </a>
    </div>
  );
};

export default Header;
