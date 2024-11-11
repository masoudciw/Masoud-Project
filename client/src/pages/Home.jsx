import Banner from "../components/Banner";
import Business from "../components/Business";
import Brands from "../components/Brands";
import useTitle from "../hooks/useTitle";

const Home = () => {

  useTitle("Masoud | Piano");
  return (
    <>
      <Banner />
      <Business />
      <Brands />
    </>
  );
};

export default Home;
