// import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="  py-6 md:py-8">
        <div className="container text-center mx-auto">
          <p className=" text-xs lg:text-sm">
            Copyright ©2024 | All rights reserved by Learn with Sumit
          </p>
          <p>
            {" "}
            <code>
              Code By{" "}
              <a className=" text-gray-500" href="https://github.com/">
                {" "}
                Jahid
              </a>
            </code>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
