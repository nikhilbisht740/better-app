"use client";
import React, { useState, useEffect } from "react";

// Reusable Components
export const Input = ({
  type = "text",
  value,
  onChange,
  className = "",
  ...props
}) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

export const Slider = ({
  min,
  max,
  value,
  onChange,
  className = "",
  ...props
}) => (
  <input
    type="range"
    min={min}
    max={max}
    value={value}
    onChange={(e) => onChange(Number(e.target.value))}
    className={`w-full ${className}`}
    {...props}
  />
);

export const Select = ({
  value,
  onChange,
  children,
  className = "",
  ...props
}) => (
  <select
    value={value}
    onChange={onChange}
    className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  >
    {children}
  </select>
);

export const Button = ({ children, className = "", ...props }) => (
  <button
    className={`bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export const Card = ({ children, className = "", ...props }) => (
  <div className={`bg-white shadow-md rounded-lg ${className}`} {...props}>
    {children}
  </div>
);

export const div = ({ children, className = "", ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

// Main Mortgage Calculator Component
const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [zipCode, setZipCode] = useState("121001");
  const [monthlyPayment, setMonthlyPayment] = useState(2100);
  const [breakdown, setBreakdown] = useState({
    principalAndInterest: 1779,
    propertyTaxes: 265,
    homeownersInsurance: 132,
    hoaFees: 132,
    utilities: 100,
  });

  const calculateMonthlyPayment = () => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const mortgagePayment =
      (principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const newBreakdown = {
      principalAndInterest: Math.round(mortgagePayment),
      propertyTaxes: 265,
      homeownersInsurance: 132,
      hoaFees: 132,
      utilities: 100,
    };

    const totalMonthlyPayment = Object.values(newBreakdown).reduce(
      (sum, value) => sum + value,
      0
    );

    setMonthlyPayment(Math.round(totalMonthlyPayment));
    setBreakdown(newBreakdown);
  };

  useEffect(() => {
    calculateMonthlyPayment();
  }, [homePrice, downPayment, interestRate, loanTerm]);

  const handleHomePriceChange = (value) => {
    setHomePrice(value);
    setDownPayment(Math.round((value * downPaymentPercent) / 100));
  };

  const handleDownPaymentChange = (value) => {
    setDownPayment(value);
    setDownPaymentPercent(Math.round((value / homePrice) * 100));
  };

  const handleDownPaymentPercentChange = (value) => {
    setDownPaymentPercent(value);
    setDownPayment(Math.round((homePrice * value) / 100));
  };

  return (
    <div className="p-4 max-w-5xl mx-auto mt-20">
      <div className="min-h-[60vh] ">
        <h1 className="text-3xl font-bold mb-8 mt-28  text-green-600 text-center ">
          Mortgage calculator
        </h1>
        <p className="mb-10 ">
          Use our mortgage calculator built directly into it! Get accurate
          estimates for your monthly mortgage payments if you will be required
          to have private mortgage insurance (PMI). Also learn why.
        </p>
      </div>

      <Card className="mb-6 bg-white shadow-lg p-6 rounded-lg">
        <div className="bg-green">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Home price
              </label>
              <Input
                type="number"
                value={homePrice}
                onChange={(e) => handleHomePriceChange(Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Monthly payment
              </label>
              <Input
                value={`$${monthlyPayment}/mo`}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-gray-700 font-medium">
              Home price slider
            </label>
            <Slider
              min={100000}
              max={1000000}
              step={1000}
              value={homePrice}
              onChange={handleHomePriceChange}
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                ZIP code
              </label>
              <Input
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Down payment
              </label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  value={downPayment}
                  onChange={(e) =>
                    handleDownPaymentChange(Number(e.target.value))
                  }
                  className="w-2/3 p-3 border border-gray-300 rounded-md"
                />
                <Input
                  type="number"
                  value={downPaymentPercent}
                  onChange={(e) =>
                    handleDownPaymentPercentChange(Number(e.target.value))
                  }
                  className="w-1/3 p-3 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Interest rate
              </label>
              <Input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Length of loan
              </label>
              <Select
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-md"
              >
                <option value={15}>15 years</option>
                <option value={30}>30 years</option>
              </Select>
            </div>
          </div>
        </div>
      </Card>

      <Button className="mb-6">Get pre-approved</Button>

      <h2 className="text-2xl font-bold mb-4">Monthly payment breakdown</h2>
      <div className="mb-4 text-1xl font-bold">${monthlyPayment}/mo</div>
      <div className="flex items-center mb-4">
        <div
          className="flex-grow h-4 bg-green-500"
          style={{
            width: `${
              (breakdown.principalAndInterest / monthlyPayment) * 100
            }%`,
          }}
        ></div>
        <div
          className="h-4 bg-blue-500"
          style={{
            width: `${(breakdown.propertyTaxes / monthlyPayment) * 100}%`,
          }}
        ></div>
        <div
          className="h-4 bg-purple-500"
          style={{
            width: `${(breakdown.homeownersInsurance / monthlyPayment) * 100}%`,
          }}
        ></div>
        <div
          className="h-4 bg-yellow-500"
          style={{ width: `${(breakdown.hoaFees / monthlyPayment) * 100}%` }}
        ></div>
        <div
          className="h-4 bg-red-500"
          style={{ width: `${(breakdown.utilities / monthlyPayment) * 100}%` }}
        ></div>
      </div>

      {/* <MonthlyPaymentBreakdown /> */}
      <div className="mt-8">
        {/* <h2 className="text-xl font-bold mb-4">Monthly payment breakdown</h2> */}
        <div className="flex items-center mb-4">
          <div className="text-2xl font-bold">${monthlyPayment}</div>
          {/* <div className="ml-4 flex-grow">
            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-600"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div> */}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-600 rounded-full mr-2"></div>
              <span>Principal & interest</span>
            </div>
            <div className="text-right">${breakdown.principalAndInterest}</div>
          </div>
          <div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-600 rounded-full mr-2"></div>
              <span>Property Taxes</span>
            </div>
            <div className="text-right">{breakdown.propertyTaxes}</div>
          </div>
          <div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
              <span>Insurance</span>
            </div>
            <div className="text-right">{breakdown.homeownersInsurance}</div>
          </div>
          <div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-600 rounded-full mr-2"></div>
              <span>HOA</span>
            </div>
            <div className="text-right">{breakdown.hoaFees}</div>
          </div>
          <div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-600 rounded-full mr-2"></div>
              <span>Utilities</span>
            </div>
            <div className="text-right">{breakdown.utilities}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Additional Components
// const MonthlyPaymentBreakdown = () => {
//   return (
//     <div className="mt-8">
//       <h2 className="text-xl font-bold mb-4">Monthly payment breakdown</h2>
//       <div className="flex items-center mb-4">
//         <div className="text-2xl font-bold">$2,146/mo</div>
//         <div className="ml-4 flex-grow">
//           <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
//             <div className="h-full bg-green-500" style={{ width: "83%" }}></div>
//             <div className="h-full bg-blue-500" style={{ width: "12%" }}></div>
//             <div className="h-full bg-purple-500" style={{ width: "5%" }}></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// const MonthlyPaymentBreakdown = () => {
//   return (
//     <div className="mt-8">
//       {/* <h2 className="text-xl font-bold mb-4">Monthly payment breakdown</h2> */}
//       <div className="flex items-center mb-4">
//         <div className="text-2xl font-bold">$2,100/mo</div>
//         <div className="ml-4 flex-grow">
//           <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
//             <div className="h-full bg-green-600" style={{ width: "70%" }}></div>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <div className="flex items-center">
//             <div className="w-4 h-4 bg-green-600 rounded-full mr-2"></div>
//             <span>Principal & interest</span>
//           </div>
//           <div className="text-right">$1,500</div>
//         </div>
//         <div>
//           <div className="flex items-center">
//             <div className="w-4 h-4 bg-purple-600 rounded-full mr-2"></div>
//             <span>Property taxes</span>
//           </div>
//           <div className="text-right">$260</div>
//         </div>
//         <div>
//           <div className="flex items-center">
//             <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
//             <span>Homeowners insurance</span>
//           </div>
//           <div className="text-right">$125</div>
//         </div>
//         <div>
//           <div className="flex items-center">
//             <div className="w-4 h-4 bg-yellow-600 rounded-full mr-2"></div>
//             <span>HOA fees</span>
//           </div>
//           <div className="text-right">$130</div>
//         </div>
//         <div>
//           <div className="flex items-center">
//             <div className="w-4 h-4 bg-red-600 rounded-full mr-2"></div>
//             <span>Utilities</span>
//           </div>
//           <div className="text-right">$100</div>
//         </div>
//       </div>
//     </div>
//   );
// };

const MortgageCalculatorHelp = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4">
        How does a mortgage calculator help me?
      </h2>
      <p className="text-gray-600 mb-6">
        When deciding how much house you can afford, one of the most important
        pieces to determine is whether a home will fit into your monthly budget.
        A mortgage calculator helps you understand the monthly cost of a home.
        And ours will allow you to enter different down payments and interest
        rates to help determine what is affordable for you.
      </p>

      <h2 className="text-2xl font-bold mb-4">
        How much monthly mortgage payment can I afford?
      </h2>
      <p className="text-gray-600 mb-6">
        Lenders determine how much you can afford on a monthly housing payment
        by calculating your debt-to-income ratio (DTI). The maximum DTI you can
        have in order to qualify for most mortgage loans is often between
        45-50%, with your anticipated housing costs included.
      </p>
      <p className="text-gray-600 mb-6">
        Your DTI is the balance between your income and your debt. It helps
        lenders understand how safe or risky it is for them to approve your
        loan. A DTI ratio represents how much of your gross monthly income is
        spoken for by creditors, and how much of it is left over to you as
        disposable income. It's most commonly written as a percentage. For
        example, if you pay half your monthly income in debt payments, you would
        have a DTI of 50%.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h3 className="font-bold mb-2">
          Formula for calculating your debt-to-income (DTI) ratio:
        </h3>
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="border-b border-gray-400 pb-2 mb-2">
              Monthly Debt Payments
            </div>
            <div>Monthly Gross Income</div>
          </div>
          <div className="mx-4">x 100 =</div>
          <div>Debt-to-Income Ratio</div>
        </div>
      </div>

      {/* Add DTI calculation example here */}
    </div>
  );
};

const MortgagePaymentCalculation = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4">
        How to calculate monthly mortgage payments?
      </h2>
      <p className="text-gray-600 mb-6">
        Your monthly mortgage payment includes loan principal and interest,
        property taxes, homeowners insurance, and mortgage insurance (PMI), if
        applicable. While not typically included in your mortgage payment,
        homeowners also pay monthly utilities and sometimes pay homeowners
        association (HOA) fees, so it's a good idea to factor these into your
        monthly budget. This mortgage calculator factors in all these typical
        monthly costs so you can really crunch the numbers.
      </p>

      <h3 className="text-xl font-bold mb-2">
        Formula for calculating monthly mortgage payments
      </h3>
      <p className="text-gray-600 mb-4">
        The easiest way to calculate your mortgage payment is to use a
        calculator, but for the curious or mathematically inclined, here's the
        formula for calculating principal and interest yourself:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <p className="text-center mb-4">
          Monthly mortgage payments (M) = P x (r(1+r)^n) / ((1+r)^n - 1)
        </p>
        <p className="mb-2">Where:</p>
        <ul className="list-disc list-inside">
          <li>M is monthly mortgage payments</li>
          <li>P is the principal loan amount (the amount you borrow)</li>
          <li>
            r is the monthly interest rate (annual interest rate divided by 12
            and expressed as a decimal)
          </li>
          <li>n is the total number of payments in months</li>
        </ul>
      </div>

      {/* Add mortgage calculation example here */}
    </div>
  );
};

const PropertyTaxTable = () => {
  const taxData = [
    {
      state: "AL",
      medianRate: "0.41%",
      meanRate: "0.40%",
      medianValue: "$157,100",
      medianTaxes: "$645",
    },
    {
      state: "AK",
      medianRate: "1.23%",
      meanRate: "1.04%",
      medianValue: "$282,800",
      medianTaxes: "$3,454",
    },
    {
      state: "AZ",
      medianRate: "0.62%",
      meanRate: "0.63%",
      medianValue: "$265,600",
      medianTaxes: "$1,648",
    },
    {
      state: "AR",
      medianRate: "0.62%",
      meanRate: "0.64%",
      medianValue: "$142,100",
      medianTaxes: "$878",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4">
        Do you know your property tax rate?
      </h2>
      <p className="text-gray-600 mb-6">
        While exact property tax rates vary by county, it can be helpful to look
        at taxes on the state level to get an idea for taxes in your state.
        Here's a helpful chart from Forbes breaking down the Census Bureau's
        2021 American Community Survey 5-year estimate:
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 text-left">State</th>
              <th className="py-2 px-4 text-left">
                Median Effective Property Tax Rate
              </th>
              <th className="py-2 px-4 text-left">
                Mean Effective Property Tax Rate
              </th>
              <th className="py-2 px-4 text-left">Median Home Value</th>
              <th className="py-2 px-4 text-left">
                Median Property Taxes Paid
              </th>
            </tr>
          </thead>
          <tbody>
            {taxData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="py-2 px-4">{row.state}</td>
                <td className="py-2 px-4">{row.medianRate}</td>
                <td className="py-2 px-4">{row.meanRate}</td>
                <td className="py-2 px-4">{row.medianValue}</td>
                <td className="py-2 px-4">{row.medianTaxes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Help Component
// const MortgageCalculatorHelp = () => {
//   return (
//     <div className="bg-gray-100 p-6 rounded-lg mb-6">
//       <h3 className="text-lg font-bold mb-4">Need help?</h3>
//       <p>
//         Not sure where to start? We can help you find and compare mortgage
//         options, including loan terms, interest rates, and more.
//       </p>
//       <Button className="mt-4">Contact Us</Button>
//     </div>
//   );
// };

// // Payment Calculation Component
// const MortgagePaymentCalculation = () => {
//   return (
//     <div className="mb-6">
//       <h2 className="text-xl font-bold mb-4">Mortgage payment calculation</h2>
//       <p>
//         The mortgage payment calculation is based on the total loan amount,
//         interest rate, and length of the loan. This includes the principal and
//         interest portions of the payment.
//       </p>
//     </div>
//   );
// };

// // Property Tax Table Component
// const PropertyTaxTable = () => {
//   return (
//     <div className="mb-6">
//       <h2 className="text-xl font-bold mb-4">Property tax table</h2>
//       <table className="w-full text-left table-auto">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Location</th>
//             <th className="px-4 py-2">Property Tax Rate</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border px-4 py-2">City A</td>
//             <td className="border px-4 py-2">1.25%</td>
//           </tr>
//           <tr>
//             <td className="border px-4 py-2">City B</td>
//             <td className="border px-4 py-2">1.50%</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };
const PMIInfo = () => (
  <Card className="mt-8 max-w-4xl mx-auto mt-8 p-6 bg-white">
    <div>
      <h2 className="text-2xl font-bold mb-4">
        This mortgage calculator shows your mortgage costs with PMI
      </h2>
    </div>
    <div>
      <p className="text-sm text-gray-600 mb-4">
        PMI, an abbreviation for private mortgage insurance, aids potential
        homeowners in qualifying for a mortgage without the necessity of a 20%
        down payment. By opting for a lower down payment and choosing a mortgage
        with PMI, you can purchase a home sooner, begin accruing equity, and
        keep cash available for future needs. This can all be calculated using
        this Mortgage Calculator.
      </p>
      <p className="text-sm text-gray-600 mb-4">
        Choosing a mortgage with PMI is a popular option: 71% of first-time
        homebuyers had a down payment of less than 20% in July 2021. In 2020,
        the median down payment for first-time homebuyers was just 7%, and it
        hasn't risen above 10% since 1989.
      </p>
      <p className="text-sm text-gray-600">
        PMI is automatically removed from conventional mortgages once your home
        equity reaches 22%. Alternatively, you can request the removal of PMI
        once you've accumulated at least 20% home equity.
      </p>
    </div>
  </Card>
);

const HOAInfo = () => (
  <Card className=" mt-8 max-w-4xl mx-auto mt-8 p-6 bg-white">
    <div>
      <h2 className="text-2xl font-bold mb-4">
        This mortgage calculator includes HOA fees
      </h2>
    </div>
    <div>
      <p className="text-sm text-gray-600 mb-4">
        Homeowners association (HOA) fees are typically charged directly by a
        homeowners association, but as HOA fees come part and parcel with
        condos, townhomes, and planned housing developments, they're an
        essential factor to consider when calculating your mortgage costs.
      </p>
      <p className="text-sm text-gray-600">
        Homes that share structural elements, such as roofs and walls, or
        community amenities like landscaping, pools, or BBQ areas, often require
        homeowners to pay HOA fees for the maintenance of these shared features.
        It's important to factor in these costs during your budget planning
        stage, especially considering that HOA fees typically increase annually.
        HOAs may also charge additional fees known as 'special assessments' to
        cover unexpected expenses from time to time.
      </p>
    </div>
  </Card>
);

const ReducePaymentsInfo = () => (
  <Card className="mt-8 max-w-4xl mx-auto mt-8 p-6 bg-white">
    <div>
      <h2 className="text-2xl font-bold mb-4">
        How to reduce your monthly mortgage payments?
      </h2>
    </div>
    <div>
      <p className="text-sm text-gray-600 mb-4">
        The lower the purchase price of the home, the lower your loan amount
        will be. But if the seller is less than willing to cut you a deal, you
        have other options.
      </p>
      <h3 className="text-xl font-bold mb-2">
        Extend the length of your mortgage
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        The more time you have to pay off the mortgage, the less each monthly
        mortgage payment will be. (In lender-speak, 'extending the length of
        your mortgage' is known as 'increasing your loan term.') This is why
        people often choose a 30-year fixed rate mortgage over one with a 15- or
        20-year term.
      </p>
      <h3 className="text-xl font-bold mb-2">Increase your down payment</h3>
      <p className="text-sm text-gray-600 mb-4">
        The smaller the amount of your mortgage, the smaller your monthly
        mortgage payments will be. If you're able to put at least 20% of the
        home price towards your down payment, you'll be able to avoid PMI
        (private mortgage insurance). Even if you can't afford a complete 20%
        down payment, boosting your down payment will help you get PMI removed
        sooner. In fact, boosting your down payment by 5% can lower your monthly
        PMI fees.
      </p>
      <h3 className="text-xl font-bold mb-2">Get a lower interest rate</h3>
      <p className="text-sm text-gray-600 mb-4">
        Increasing your down payment can be one way to help you qualify for a
        lower interest rate. The amount of your down payment compared to the
        total amount of the loan is called your Loan-to-value ratio (LTV).
      </p>
      <p className="text-sm text-gray-600">
        Depending on your loan amount, a lower LTV may increase the likelihood
        of you being offered a low interest rate. If you plan on keeping your
        home for a while, you could consider buying points to reduce your
        interest rate. Buying points essentially means you agree to pay more
        upfront costs in exchange for a lower monthly payment.
      </p>
    </div>
  </Card>
);

const NextSteps = () => (
  <Card className=" mt-8 max-w-4xl mx-auto mt-8 p-6 bg-white">
    <div>
      <h2 className="text-2xl font-bold mb-4">Next steps to buying a house</h2>
    </div>
    <div>
      <p className="text-sm text-gray-600 mb-4">
        There are 8 steps to buying a house and by using this calculator you've
        completed step 2 (calculating your home affordability) and maybe even
        step 1 (getting your finances in order).
      </p>
      <p className="text-sm text-gray-600 mb-4">
        The next step is getting pre-approved. A mortgage pre-approval with
        Better Mortgage takes as little as 3-minutes and doesn't impact your
        credit score. It's a free, no-commitment way to see how much home you
        can buy, the mortgages you qualify for, and the range of interest rates
        you'll be offered.
      </p>
      <p className="text-sm text-gray-600">
        If you're ready to buy a home now, our definitive home buying checklist
        can walk you through everything you need to know to get the home you
        want. With your Better Mortgage pre-approval letter in hand, you'll be
        able to show sellers and real estate agents that you mean
        business—giving you an edge over homebuyers that don't have this kind of
        proof that they're financially ready to purchase. And by working with an
        agent from Better Real Estate and funding with Better Mortgage, you'll
        save $2,000 on closing costs, and save up to $8,200 on average over the
        life of your loan.**
      </p>
    </div>
  </Card>
);

const MoreResources = () => (
  <Card className=" mt-8 max-w-4xl mx-auto mt-8 p-6 bg-white">
    <div>
      <h2 className="text-2xl font-bold mb-4">More resources</h2>
    </div>
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold mb-2">
            Get pre-approved to see how much you can borrow
          </h3>
          <p className="text-sm text-gray-600 mb-2">Get started →</p>
          <p className="text-xs text-gray-500">Won't impact your credit</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold mb-2">See today's rates in your area</h3>
          <p className="text-sm text-gray-600">See rates →</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold mb-2">
            Find out your max homebuying budget
          </h3>
          <p className="text-sm text-gray-600">Try our mortgage calculator →</p>
        </div>
      </div>
    </div>
  </Card>
);

const MortgageCalculatorPage = () => {
  return (
    <div>
      <MortgageCalculator />
      <MortgageCalculatorHelp />
      <MortgagePaymentCalculation />
      <PropertyTaxTable />
      <PMIInfo />
      <HOAInfo />
      <ReducePaymentsInfo />
      <NextSteps />
      <MoreResources />
    </div>
  );
};

export default MortgageCalculatorPage;
