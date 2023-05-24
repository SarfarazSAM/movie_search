import React from "react";

const Header = (props) => {
  return (
    <div className="nav p-2 justify-content-center bg-black">
      <a className="nav-link active text-#ffffff" href="/">
        <h1>{props.text}</h1>
      </a>
    </div>
  );
};

export default Header;
