import React from "react";

const Footer = (props) => {
  return (
    <footer className="footer bg-dark">
      <div className="container text-center p-3">
        <span className="text-muted">{props.text}</span>
      </div>
    </footer>
  );
};

export default Footer;
