import React from "react";
import { ArrowRight } from "lucide-react";

// import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// const About = () => {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <header className="mb-8">
//         <nav className="flex justify-between items-center mb-8">
//           <div className="text-2xl font-bold">Better</div>
//           <div className="space-x-4">
//             <a href="#" className="text-gray-600">
//               Buy
//             </a>
//             <a href="#" className="text-gray-600">
//               Refinance
//             </a>
//             <a href="#" className="text-gray-600">
//               HELOC
//             </a>
//             <a href="#" className="text-gray-600">
//               Rates
//             </a>
//             <a href="#" className="text-gray-600">
//               Better+
//             </a>
//           </div>
//           <div className="space-x-4">
//             <button className="text-gray-600">Sign in</button>
//             <button className="bg-green-600 text-white px-4 py-2 rounded">
//               Continue
//             </button>
//           </div>
//         </nav>
//       </header>

//       <main>
//         <section className="mb-16">
//           <h2 className="text-green-600 text-xl mb-4">Our mission</h2>
//           <h1 className="text-4xl font-bold mb-8">
//             We're making homeownership simpler, faster — and most importantly,
//             more accessible for all Americans.
//           </h1>
//         </section>

//         <section className="mb-16">
//           <h2 className="text-3xl font-bold mb-4">The status quo is broken</h2>
//           <div className="flex items-start space-x-8">
//             <div className="flex-1">
//               <p className="mb-4">
//                 The traditional processes around homeownership are opaque and
//                 stressful. Fees aren't transparent and some are simply
//                 outrageous in size. Traditional mortgage lending is rife with
//                 unnecessary fees and slow, painful processes. It's a system set
//                 up to benefit insiders — not you. Better.com CEO, Vishal Garg,
//                 set out to change that.
//               </p>
//               <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center">
//                 Read Vishal's story
//                 <ArrowRight className="ml-2" size={16} />
//               </button>
//             </div>
//             <div className="flex-1">
//               <img
//                 src="/api/placeholder/400/300"
//                 alt="Vishal Garg"
//                 className="rounded"
//               />
//             </div>
//           </div>
//         </section>

//         <section className="bg-green-600 text-white p-8 rounded-lg mb-16">
//           <h2 className="text-3xl font-bold mb-4">How we're changing things</h2>
//           <p className="mb-4">
//             Homeownership is a huge part of our economy. Housing overall is a
//             $33 trillion business, and mortgages account for $15 trillion. Yet
//             home finance operates in the same way it has for decades — through
//             opaque systems and expensive intermediaries whose interests are
//             misaligned with consumers'.
//           </p>
//           <p>
//             That's why Better.com is redefining the homeownership process from
//             the ground up. We're using technology to make it faster and more
//             efficient, and humans to help make it friendly and enjoyable.
//           </p>
//         </section>

//         <section className="mb-16">
//           <h2 className="text-3xl font-bold mb-8">Backed by</h2>
//           <div className="grid grid-cols-4 gap-8">
//             <img
//               src="/api/placeholder/150/50"
//               alt="SoftBank"
//               className="grayscale"
//             />
//             <img
//               src="/api/placeholder/150/50"
//               alt="Ally"
//               className="grayscale"
//             />
//             <img
//               src="/api/placeholder/150/50"
//               alt="Citi"
//               className="grayscale"
//             />
//             <img
//               src="/api/placeholder/150/50"
//               alt="Goldman Sachs"
//               className="grayscale"
//             />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };
const About = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 p-8">
      {/* <header className="mb-8 ">
        <nav className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold">Better</div>
          <div className="space-x-4">
            <a href="#" className="text-gray-600">
              Buy
            </a>
            <a href="#" className="text-gray-600">
              Refinance
            </a>
            <a href="#" className="text-gray-600">
              HELOC
            </a>
            <a href="#" className="text-gray-600">
              Rates
            </a>
            <a href="#" className="text-gray-600">
              Better+
            </a>
          </div>
          <div className="space-x-4">
            <button className="text-gray-600">Sign in</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Continue
            </button>
          </div>
        </nav>
      </header> */}

      <main className="space-y-26">
        <section className="mb-12 min-h-[90vh] flex flex-col justify-center">
          <h2 className="text-green-600 text-4xl mb-10 text-center">
            Our mission
          </h2>
          <h1 className="text-4xl font-bold   ">
            We're making home ownership simpler, faster —
          </h1>
          <h1 className="text-4xl font-bold  mb-8">
            and most importantly, more accessible for all Americans.
          </h1>
        </section>

        <section className="mb-16 min-h-[50vh]  flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center ">
            The status quo is broken
          </h2>
          <div className="flex items-start space-x-8">
            <div className="flex-1">
              <p className="mb-4">
                The traditional processes around homeownership are opaque and
                stressful. Fees aren't transparent and some are simply
                outrageous in size. Traditional mortgage lending is rife with
                unnecessary fees and slow, painful processes. It's a system set
                up to benefit insiders — not you. Better.com CEO, Vishal Garg,
                set out to change that.
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center">
                Read Vishal's story
                <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
            <div className="flex-1">
              <img
                src="/images/vishal-mission.jpg"
                alt="Vishal Garg"
                className="rounded"
              />
            </div>
          </div>
        </section>

        <section className="bg-green-600 text-white p-8 rounded-lg mb-16  flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-center">
            How we're changing things
          </h2>
          <p className="mb-4">
            Homeownership is a huge part of our economy. Housing overall is a
            $33 trillion business, and mortgages account for $15 trillion. Yet
            home finance operates in the same way it has for decades — through
            opaque systems and expensive intermediaries whose interests are
            misaligned with consumers'.
          </p>
          <p>
            That's why Better.com is redefining the homeownership process from
            the ground up. We're using technology to make it faster and more
            efficient, and humans to help make it friendly and enjoyable.
          </p>
        </section>

        <section className="mb-16 min-h-[50vh] flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8 text-center">Backed by</h2>
          <div className="grid grid-cols-8 gap-14">
            <img
              src="/images/ping.jpg"
              alt="SoftBank"
              className="grayscale object-contain w-full h-full bg-transparent"
            />
            <img
              src="/images/ally.png"
              alt="Ally"
              className="grayscale object-contain w-full h-full bg-transparent"
            />
            <img
              src="/images/logo-goldman.jpg"
              alt="Citi"
              className="grayscale object-contain w-full h-full bg-transparent"
            />
            <img
              src="/images/am.png"
              alt="Goldman Sachs"
              className="grayscale object-contain w-full h-full bg-transparent"
            />
            <img
              src="/images/ping.jpg"
              alt="SoftBank"
              className="grayscale object-contain w-full h-full bg-transparent"
            />
            <img
              src="/images/ally.png"
              alt="Ally"
              className="grayscale object-contain w-full h-full bg-transparent"
            />
            <img
              src="/images/logo-goldman.jpg"
              alt="Citi"
              className="grayscale object-contain w-full h-full bg-transparent"
            />
            <img
              src="/images/citi.png"
              alt="Goldman Sachs"
              className="grayscale object-contain w-full h-full bg-transparent"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

const timelineData = [
  {
    year: 2014,
    content:
      "After Vishal Garg's first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.",
  },
  {
    year: 2015,
    content:
      "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).",
  },
  {
    year: 2016,
    content:
      "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.",
  },
  {
    year: 2017,
    content:
      "Better expands into the real estate market with Better Real Estate.",
  },
  {
    year: 2018,
    content:
      "Better Mortgage partners with Ally Bank to build Ally powered by Better.",
  },
  {
    year: 2019,
    content:
      "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.",
  },
  {
    year: 2021,
    content:
      "Better acquires Trussle — The UK's most innovative online mortgage broker.",
  },
  {
    year: 2023,
    content: [
      "Better Mortgage launches One Day Mortgage*: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.",
      "Better Mortgage launches the fully digital 3-day HELOC†.",
      "Better Mortgage launches One Day Verified Approval Letter.",
    ],
  },
  {
    year: "Today",
    content:
      "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
    cta: "Get started",
  },
];

const TimelineItem = ({ year, content, isLast, cta }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-4">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm">
        {typeof year === "number" ? (
          year.toString().slice(-2)
        ) : (
          <ChevronRight size={16} />
        )}
      </div>
      {!isLast && <div className="w-px h-full bg-gray-300 mt-2"></div>}
    </div>
    <div className="pb-8">
      <p className="text-green-600 font-bold mb-2">{year}</p>
      {Array.isArray(content) ? (
        content.map((item, index) => (
          <p key={index} className="text-gray-700 mb-2">
            {item}
          </p>
        ))
      ) : (
        <p className="text-gray-700">{content}</p>
      )}
      {cta && (
        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
          <Link href="/">{cta}</Link>
        </button>
      )}
    </div>
  </div>
);

const CompanyTimeline = () => (
  <div className="max-w-2xl mx-auto p-4">
    <h1 className="text-3xl font-bold text-center mb-8">Company timeline</h1>
    {timelineData.map((item, index) => (
      <TimelineItem
        key={item.year}
        year={item.year}
        content={item.content}
        isLast={index === timelineData.length - 1}
        cta={item.cta}
      />
    ))}
  </div>
);

// import React from 'react';

const TimelineItem1 = ({ year, content, number, cta }) => (
  <article
    className={`relative p-8 ${
      number % 2 === 0
        ? "border-l-2 rounded-l-2xl ml-8 pr-0"
        : "border-r-2 rounded-r-2xl mr-8 pl-0"
    } border-dashed border-green-500`}
  >
    <h4 className=" font-bold mb-2">{year}</h4>
    <div>
      {Array.isArray(content) ? (
        content.map((item, index) => (
          <p key={index} className="text-gray-700 mb-8  ">
            {item}
          </p>
        ))
      ) : (
        <p className="text-green-700 text mb-12 ">{content}</p>
      )}
      {cta && (
        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
          <Link href="/">{cta}</Link>
        </button>
      )}
    </div>
    <span
      className={`absolute top-1/2 -translate-y-1/2 ${
        number % 2 === 0 ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
      } w-8 h-8 rounded-full bg-green-500 text-white font-bold flex items-center justify-center`}
    >
      {number}
    </span>
  </article>
);

const Timeline = () => {
  const timelineData = [
    {
      year: 2014,
      content:
        "After Vishal Garg's first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.",
    },
    {
      year: 2015,
      content:
        "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).",
    },
    {
      year: 2016,
      content:
        "Better expands into the real estate market with Better Real Estate.",
    },
    {
      year: 2017,
      content:
        "Better Mortgage partners with Ally Bank to build Ally powered by Better",
    },
    {
      year: 2018,
      content:
        "Better acquires Trussle — The UK's most innovative online mortgage broker.",
    },
    {
      year: 2019,
      content:
        "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.",
    },
    {
      year: 2021,
      content:
        "Better acquires Trussle — The UK's most innovative online mortgage broker.",
    },
    {
      year: 2023,
      content:
        "Better Mortgage launches One Day Mortgage*: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.",
    },

    {
      year: "Today",
      content:
        "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
      cta: "Get started",
    },
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4"> Company Timeline</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto"></div>
      </div>
      <div className="max-w-2xl mx-auto">
        {timelineData.map((item, index) => (
          <TimelineItem1
            key={item.year}
            year={item.year}
            content={item.content}
            number={index + 1}
            cta={item.cta}
          />
        ))}
      </div>
    </section>
  );
};

const AboutPage = () => {
  return (
    <div>
      <About />
      {/* <CompanyTimeline /> */}
      <Timeline />
    </div>
  );
};
export default AboutPage;
