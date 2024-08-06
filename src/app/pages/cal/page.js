import MortgageCalculatorPage from "@/components/Cal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cal = () => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <MortgageCalculatorPage />
        </main>
        <Footer />
      </body>
    </html>
  );
};
export default cal;
