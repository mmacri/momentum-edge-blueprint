
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";

const IndustriesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Industries />
      </div>
      <Footer />
    </div>
  );
};

export default IndustriesPage;
