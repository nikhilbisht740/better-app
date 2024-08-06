"use client";

import React from "react";
import { Phone, DollarSign, Home, RefreshCw } from "lucide-react";
import Link from "next/link";

const StartPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between space-y-4">
      <header className=" fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center">
        <div className="text-green-600 font-bold text-xl">
          <Link href="/pages/home">Better Mortgage</Link>
        </div>
        <div className="flex items-center">
          <Phone className="w-4 h-4 mr-2" />
          <span>Need help? Call (415) 523 8837</span>
        </div>
        <img
          src="/images/betty1.jpg"
          alt="Betty"
          className=" fixed top-0 left-1/2 transform -translate-x-1/2  z-30 w-10 h-10 md:w-20 md:h-20 lg:w-30 lg:h-30 rounded-full mt-8 mb-4"
        />
      </header>

      <div className=" flex flex-col items-center justify-center px-4 space-y-10">
        <h1 className="text-3xl font-bold mt-24 ">Hi, I'm Betty!</h1>
        <h1 className="text-3xl font-bold mb-1">What can I help you with?</h1>

        <div className="space-y-4 w-full max-w-md">
          <Link
            href="/pages/home"
            className="w-full p-3  border-2 border-green-500 rounded-lg flex items-center"
          >
            <Home className="mr-3" />
            <> Buying a home</>
          </Link>

          <Link
            href="/pages/cal"
            className="w-full p-3  border-2 border-green-500 rounded-lg flex items-center"
          >
            <RefreshCw className="mr-3" />
            <> Refinance my mortgage</>
          </Link>

          <Link
            href="/pages/home"
            className="w-full p-3 border border-2 border-green-500 rounded-lg flex items-center"
          >
            <DollarSign className="mr-3" /> Get cash from my home
          </Link>
        </div>

        <div className="flex justify-between w-full max-w-md mt-14">
          <div>
            <p className="text-3xl font-bold text-center mb-4">$100B</p>
            <p className="text-sm text-center">
              home loans funded entirely online
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-center mb-4">400K</p>
            <p className="text-sm text-center">
              Customers who chose a Better Mortgage
            </p>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mt-14 mt-14 w-full max-w-md">
          <p className="font-semibold mb-4 text-center">
            After a few questions, you'll unlock:
          </p>
          <ul className="space-y-2 ">
            <Link href="/pages/cal">
              <li className="flex items-center">
                <DollarSign className="w-4 h-4 ml-20  mr-8 text-green-600 text-center" />{" "}
                Custom mortgage rates
              </li>
            </Link>
            {/* <li className="flex items-center">
              <DollarSign className="w-6 h-6 ml-20  mr-8 text-green-600 text-center" />{" "}
              Custom mortgage rates
            </li> */}
            <li className="flex items-center">
              <RefreshCw className="w-4 h-4 ml-20 mr-8 text-green-600 text-center" />{" "}
              Exclusive offers
            </li>
            <li className="flex items-center ">
              <Home className="w-4 h-4 ml-20 mr-8 text-green-600 text-center" />{" "}
              A personalized dashboard
            </li>
          </ul>
        </div>
      </div>

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
    </div>
  );
};

export default StartPage;
