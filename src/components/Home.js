"use client";

import React from "react";
import { Star, ChevronRight, Phone } from "lucide-react";
// import { Star } from "@heroicons/react/solid";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DropdownMenu = ({ items }) => {
  return (
    <div className="absolute top-full left-0 bg-green shadow-md rounded-b-md">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="block px-4 py-2 text-sm text-green-500 hover:bg-green-100"
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
        className="px-3 py-2 text-sm font-medium text-green-500 hover:text-gray-900"
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
      href: "/",
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
    <header className=" fixed top-0 left-0 right-0 z-50  text-[#36d07a] p-4 flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <span className="font-bold text-[#36d07a] text-2xl mr-12">Better</span>
        {/* <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:underline">
          Buy
        </a>
        <a href="#" className="hover:underline">
          Refinance
        </a>
        <a href="#" className="hover:underline">
          HELOC
        </a>
        <a href="#" className="hover:underline">
          Rates
        </a>
        <a href="#" className="hover:underline">
          Insights
        </a>
      </nav> */}
        <nav className="hidden md:ml-6 md:flex space-x-4">
          {" "}
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Phone className="h-5 w-5" />
        <a href="#" className="hover:underline">
          Sign in
        </a>
        <button className="bg-green-500 text-white px-4 py-2 rounded-full">
          Get Started
        </button>
      </div>
    </header>
  );
};
const Hero = () => (
  <section className="bg-[#002f20] text-[#36d07a] p-8 md:p-16 relative">
    <div className="max-w-5xl mx-auto ">
      <h1 className="text-6xl md:text-8xl font-bold mt-8 mb-8">
        Mortgages made simple
      </h1>
      <div className="flex items-center  ">
        <div className="flex-1">
          <button className="bg-[#36d07a] text-[#002f20] px-8 py-4 rounded-full text-lg font-semibold mb-4">
            Start my approval
          </button>
          <p className="text-white text-sm flex items-center">
            <svg
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c1.5 0 4 0 4 3s-2.5 3-4 3-4 0-4-3 2.5-3 4-3z"
              />
            </svg>
            3 min • No credit impact
          </p>
        </div>
        <div className="flex-1">
          <img
            src="/images/better0.webp"
            alt="Phone with mortgage app"
            className="rounded-lg shadow-lg max-h-[900px] mx-auto"
          />
        </div>

        <div className="mt-6 flex flex-col items-start space-y-2">
          <div className="flex space-x-1">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
            <Star className="h-6 w-6 text-yellow-400 fill-current" />
            <Star className="h-6 w-6 text-gray-300 fill-current" />
          </div>
          <span className="text-white">4.6 Stars | 3,177 Google reviews</span>
        </div>
      </div>
    </div>
  </section>
);

// import { Star } from "@heroicons/react/solid";

const testimonials = [
  {
    name: "Arian",
    text: "I used Better three years ago for my primary residence and just now for my vacation home. Very simple process. Each time it took about two weeks to close.",
    img: "/images/arian.webp",
  },
  {
    name: "Amanda",
    text: "The process was smooth and fast. I would definitely recommend Better to anyone looking for a mortgage.",
    img: "/images/amanda.webp",
  },
  {
    name: "Paul",
    text: "I used Better three years ago for my primary residence and just now for my vacation home. Very simple process. Each time it took about two weeks to close.",
    img: "/images/story.webp",
  },
];

const Testimonial = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(2);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Testimonial Card */}
        <div className="flex-1 mb-8 md:mb-0">
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Image
                src={testimonials[selectedTestimonial].img}
                alt={testimonials[selectedTestimonial].name}
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-800 text-sm mb-4">
              <span className="text-2xl font-bold text-black">“</span>
              {testimonials[selectedTestimonial].text}
            </p>
            <p className="text-gray-500 text-xs">
              Paul — Better Mortgage customer
            </p>
          </div>
          {/* Buttons */}
          <div className="flex justify-center space-x-4 mt-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                className={`px-4 py-2 border-2 rounded-full ${
                  selectedTestimonial === index
                    ? "border-green-600 text-green-600"
                    : "border-gray-200 text-gray-500"
                }`}
                onClick={() => setSelectedTestimonial(index)}
              >
                {testimonial.name}
              </button>
            ))}
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Find out why we’re better.
          </h2>

          <button className="bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold mb-4">
            <Link href="/pages/about">See all our stories</Link>
          </button>
          <div className="mt-4 flex justify-center md:justify-start items-center">
            <Star className="h-6 w-6 text-green-600 fill-current mr-2" />
            <p className="text-gray-600">
              Trustpilot <span className="text-green-600">Excellent</span> 4.3
              out of 5
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// const products = [
//   {
//     title: "Buying your first home with Better",
//     description: "",
//     imgSrc: "/images/better2.webp",
//     link: "#",
//   },
//   {
//     title: "One Day Mortgage",
//     description:
//       "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.",
//     imgSrc: "/images/better3.webp",
//     link: "#",
//   },
//   {
//     title: "Better HELOC",
//     description:
//       "Introducing One Day HELOC—your express lane to getting cash from your home with our Home Equity Line of Credit. Access up to 90% of your home equity as cash in as little as 7 days.",
//     imgSrc: "/images/better11.webp",
//     link: "#",
//   },
//   {
//     title: "Insurance",
//     description: "",
//     imgSrc: "/images/insurance.webp",
//     link: "#",
//   },
// ];

// const ProductSection = () => {
//   return (
//     <section className="bg-gray-50 py-12">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-bold text-gray-900 mb-6">
//           Got questions? We've got answers
//         </h2>
//         {/* Navigation Buttons */}
//         <div className="flex space-x-4 mb-8">
//           <button className="bg-white border-2 border-green-600 text-green-600 px-6 py-2 rounded-full font-semibold">
//             Our products
//           </button>
//           <button className="bg-white border-2 border-gray-300 text-gray-600 px-6 py-2 rounded-full font-semibold">
//             Calculators
//           </button>
//           <button className="bg-white border-2 border-gray-300 text-gray-600 px-6 py-2 rounded-full font-semibold">
//             Guides & FAQs
//           </button>
//         </div>
//         {/* Product Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {products.map((product, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between space-y-4 hover:shadow-xl transition-shadow duration-300"
//             >
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-700 mb-2">
//                   {product.title}
//                 </h3>
//                 <p className="text-gray-500 text-sm">{product.description}</p>
//               </div>
//               {product.imgSrc && (
//                 <div className="w-full">
//                   <Image
//                     src={product.imgSrc}
//                     alt={product.title}
//                     width={400}
//                     height={250}
//                     className="rounded-lg"
//                   />
//                 </div>
//               )}
//               <div className="flex items-center mt-4">
//                 <a
//                   href={product.link}
//                   className="bg-green-100 p-2 rounded-full"
//                 >
//                   <span className="sr-only">View details</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="w-6 h-6 text-green-600"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 4.5v15m7.5-7.5h-15"
//                     />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// import React, { useState } from 'react';
// import Image from 'next/image';

const AnswersSection = () => {
  const [activeTab, setActiveTab] = useState("Our products");

  const tabs = ["Our products", "Calculators", "Guides & FAQs"];

  const renderContent = () => {
    switch (activeTab) {
      case "Our products":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              title="Buying your first home with Better"
              image="/images/better11.webp"
            />
            <ProductCard
              title="One Day Mortgage"
              description="Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks."
              logo="/images/better3.webp"
            />
            <ProductCard
              title="Better HELOC"
              description="Introducing One Day HELOC—your express lane to getting cash from your home with our Home Equity Line of Credit. Access up to 90% of your home equity as cash in as little as 7 days."
              image="/images/better2.webp"
            />
            <ProductCard title="Insurance" image="/images/insurance.webp" />
          </div>
        );
      case "Calculators":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CalculatorCard
              title="Mortgage calculator"
              chartType="bar"
              image="/images/affordability-calculator.webp"
            />
            <CalculatorCard
              title="Affordability calculator"
              description="Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford."
              chartType="pie"
            />
            <CalculatorCard
              title="HELOC calculator"
              description="Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be."
              chartType="semi-circle"
            />
            <CalculatorCard
              title="Fixed-rate loan comparison calculator"
              chartType="area"
            />
          </div>
        );
      case "Guides & FAQs":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GuideCard
              title="What is a good debt-to-income ratio for a home loan?"
              duration="5 minutes"
              image="/images/good-dti.webp"
            />
            <GuideCard
              title="Buying a house without realtor"
              description="Thinking about buying a house without a real estate agent? Read this first."
              duration="5 minutes"
              image="/images/buy-house-without-realtor.webp"
            />
            <GuideCard
              title="Timeline for homebuying process"
              description="Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps."
              duration="3 minutes"
              image="/images/loan-timeline.webp"
            />
            <GuideCard
              title="Conventional loan requirements"
              duration="3 minutes"
              image="/images/conventional-loan.webp"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center space-x-4 mb-8">
        <h2 className="text-4xl font-bold mb-8 mr-24">
          Got question? <br />
          We've got answers
        </h2>
        <div className="flex space-x-4 mb-8 ">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full ${
                activeTab === tab
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {renderContent()}
    </div>
  );
};

const ProductCard = ({ title, description, image, logo }) => (
  <div className="bg-green-50 rounded-lg p-6">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    {image && (
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="mb-4 rounded"
      />
    )}
    {logo && (
      <Image src={logo} alt={title} width={150} height={50} className="mb-4" />
    )}
    {description && <p className="text-gray-600 mb-4">{description}</p>}
    <button className="text-green-600 hover:text-green-700">
      Learn more <span className="ml-2">→</span>
    </button>
  </div>
);

// const CalculatorCard = ({ title, description, chartType }) =>

//   (
//   <div className="bg-green-50 rounded-lg p-6">
//     <h3 className="text-xl font-semibold mb-4">{title}</h3>
//     <div
//       className={`w-full h-40 bg-green-200 rounded mb-4 ${
//         chartType === "pie"
//           ? "rounded-full"
//           : chartType === "semi-circle"
//           ? "rounded-t-full"
//           : ""
//       }`}
//     ></div>
//     {description && <p className="text-gray-600 mb-4">{description}</p>}
//     <button className="text-green-600 hover:text-green-700">
//       Calculate <span className="ml-2">→</span>
//     </button>
//   </div>
// );
const CalculatorCard = ({ title, description, chartType }) => {
  // Map chartType to the corresponding image paths
  const imageMap = {
    bar: "/images/mortgage-calculator.webp",
    pie: "/images/affordability-calculator.webp",
    "semi-circle": "/images/heloc-calculator.webp",
    area: "/images/fixed-rate-calculator.webp",
  };

  return (
    <Link href="/pages/cal">
      <div className="bg-green-50 rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div
          className={`w-full h-40  rounded mb-4 flex items-center justify-center ${
            chartType === "pie"
              ? "rounded-full"
              : chartType === "semi-circle"
              ? "rounded-t-full"
              : ""
          }`}
        >
          <img
            src={imageMap[chartType]}
            alt={`${chartType} chart`}
            className="object-contain w-full h-full"
          />
        </div>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        <button className="text-green-600 hover:text-green-700">
          Calculate <span className="ml-2">→</span>
        </button>
      </div>
    </Link>
  );
};

const GuideCard = ({ title, description, duration, icon, image }) => (
  <div className="bg-green-50 rounded-lg p-6">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    {icon && (
      <Image src={icon} alt={title} width={50} height={50} className="mb-4" />
    )}
    {image && (
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="mb-4 rounded"
      />
    )}
    {description && <p className="text-gray-600 mb-4">{description}</p>}
    <div className="flex items-center text-gray-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
          clipRule="evenodd"
        />
      </svg>
      <span>{duration}</span>
    </div>
    <button className="text-green-600 hover:text-green-700 mt-4">
      Read more <span className="ml-2">→</span>
    </button>
  </div>
);

// const ProductCard = ({ title, description, imageSrc }) => (
//   <div className="bg-gray-100 rounded-lg overflow-hidden">
//     <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
//     <div className="p-6">
//       <h3 className="font-bold text-xl mb-2">{title}</h3>
//       <p className="text-gray-600 mb-4">{description}</p>
//       <button className="flex items-center text-green-900 font-semibold">
//         Learn more <ChevronRight className="ml-2 h-4 w-4" />
//       </button>
//     </div>
//   </div>
// );

const Footer = () => (
  <footer className="bg-white py-12 px-4">
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
          <h3 className="font-bold text-xl text-green-600 mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>hello@Better.com</li>
            <li>415-523-8837</li>
            {/* Add other contact information */}
          </ul>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-600">
          <p>&copy; 2024 Better. All rights reserved.</p>
          {/* Add more legal text and links here */}
        </div>
      </div>
      {/* Add legal information and social media icons here */}
    </div>
  </footer>
);

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Testimonial />
        <AnswersSection />

        {/* <ProductSection />
        <ProductSections /> */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
