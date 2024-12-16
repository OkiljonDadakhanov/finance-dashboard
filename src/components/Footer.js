import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 bg-gray-800 text-red text-center">
      <p className="text-sm">
        &copy; {currentYear} Finance Dashboard. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
