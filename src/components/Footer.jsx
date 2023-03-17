// import React from "react";

// const Footer = () => {
//   return (
//     <>
//       <footer className="mb-0 text-center">
//         <div className="d-flex align-items-center justify-content-center pb-5">
//           <div className="col-md-6">
//             <p className="mb-3 mb-md-0">Made with ❤️ by {" "}
//               <a  href="https://sahibsingh.vercel.app" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Sahib Singh</a>
//             </p>
//             <a className="text-dark fs-4" href="https://github.com/ssahibsingh" target="_blank" rel="noreferrer">
//               <i className="fa fa-github"></i>
//             </a>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;




import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="mb-4">About Flipkart</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  Company Information
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Flipkart Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-4">Help</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  Payments
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Cancellation &amp; Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Report Infringement
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-4">Policy</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-4">
        <p className="mb-0">
          © 2023 Flipkart.com
        </p>
        <h4>Developed by Akash Srivastava</h4>
      </div>
    </footer>
  );
};

export default Footer;
