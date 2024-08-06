import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6">
      <div className="bg-white p-8 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl text-green-600 mb-4">Better</h3>
            <p className="text-sm">
              Better is a family of companies serving all your homeownership
              needs.
            </p>
            {/* Add other Better companies here */}
          </div>
          <div>
            <h3 className="font-bold text-xl text-green-600 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>Home affordability calculator</li>
              <li>Mortgage calculator</li>
              {/* Add other resource links */}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl text-green-600 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <Link href="/pages/about">About Us</Link>
              <li>Careers</li>
              {/* Add other company links */}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl text-green-600 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li>hello@Better.com</li>
              <li>415-523-8837</li>
              {/* Add other contact information */}
            </ul>
          </div>
        </div>
        {/* Add legal information and social media icons here */}
      </div>
    </footer>
  );
};

export default Footer;
