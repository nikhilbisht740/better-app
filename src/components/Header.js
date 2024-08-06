"use client";

import React, { useState } from "react";
import Link from "next/link";

// const Header = () => {
//   return (
// <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-6 bg-smoke-white border-b">
//   <div className="flex items-center">
//     <Link href="/">
//       <span className="text-2xl font-bold text-green-700 mr-20">
//         Better
//       </span>
//     </Link>
//     <nav className="ml-6">
//       <ul className="flex space-x-8 font-bold text-1xl text-black">
//         <li>
//           <Link href="/buy" className=" hover:text-gray-900">
//             Buy
//           </Link>
//         </li>
//         <li>
//           <Link href="/refinance" className=" hover:text-gray-900">
//             Refinance
//           </Link>
//         </li>
//         <li>
//           <Link href="/heloc" className=" hover:text-gray-900">
//             HELOC
//           </Link>
//         </li>
//         <li>
//           <Link href="/rates" className=" hover:text-gray-900">
//             Rates
//           </Link>
//         </li>
//         <li>
//           <Link href="/better-plus" className=" hover:text-gray-900">
//             Better+
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   </div>
//   <div className="flex items-center space-x-4">
//     <Link href="/contact" className=" hover:text-gray-900">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-6 w-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//         />
//       </svg>
//     </Link>
//     <Link href="/signin" className=" hover:text-gray-900">
//       Sign in
//     </Link>
//     <Link
//       href="/continue"
//       className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800"
//     >
//       Continue
//     </Link>
//   </div>
// </header>
//   );
// };

// export default Header;

const DropdownMenu = ({ items }) => {
  return (
    <div className="absolute top-full left-0 bg-white shadow-md rounded-b-md">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

const NavItem = ({ label, href, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={href}
        className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
      >
        {label}
      </Link>
      {dropdownItems && isOpen && <DropdownMenu items={dropdownItems} />}
    </div>
  );
};

const Header = () => {
  const navItems = [
    {
      label: "Buy",
      href: "/pages/home",

      dropdownItems: [
        { label: "Apply now", href: "/" },
        { label: "Purchase rates", href: "/" },
        { label: "Affordability calculator", href: "/pages/cal" },
        { label: "Mortgage calculator", href: "/pages/cal" },
        { label: "Rent vs buy calculator", href: "/" },
        { label: "Find an agent", href: "/" },
        { label: "VA loans", href: "/" },
      ],
    },
    { label: "About", href: "/pages/about" },
    { label: "Mortgage", href: "/pages/cal" },
    { label: "Rates", href: "/" },
    { label: "Better+", href: "/" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-6 bg-smoke-white border-b">
      <div className="flex items-center">
        <Link href="/pages/home">
          <span className="text-2xl font-bold text-green-700 mr-20">
            Better
          </span>
        </Link>
        <nav className="ml-6">
          <ul className="flex space-x-8 font-bold text-1xl text-black">
            <nav className="hidden md:ml-6 md:flex space-x-4">
              {" "}
              {navItems.map((item, index) => (
                <NavItem key={index} {...item} />
              ))}
            </nav>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/contact" className=" hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </Link>
        <Link href="/signin" className=" hover:text-gray-900">
          Sign in
        </Link>
        <Link
          href="/continue"
          className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800"
        >
          Continue
        </Link>
      </div>
    </header>
  );
};

export default Header;
