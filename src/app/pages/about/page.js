import AboutPage from "@/components/About";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const about = () => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <AboutPage />
        </main>
        <Footer />
      </body>
    </html>
  );
};
export default about;
