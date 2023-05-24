import React from "react";

const Footer = (props) => {
  return (
    <footer class="footer bg-dark">
      <div class="container text-center p-3">
        <span class="text-muted">{props.text}</span>
      </div>
    </footer>
  );
};

export default Footer;
