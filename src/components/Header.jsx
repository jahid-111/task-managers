// import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="py-6 md:py-8  fixed top-0 w-full  z-50">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          <a href="/">
            <img
              className="h-[45px]"
              src="https://www.freeiconspng.com/uploads/logo-design-blank-circle-blue-and-orange-png-2.png"
              alt="Lws"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
