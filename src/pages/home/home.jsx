import Layout from "../../layout";
import Banner from "./components/Banner";
import Details from "./components/Details";
import Featured from "./components/Featured";
import TopBooks from "./components/TopBooks";
import TopCategory from "./components/TopCategory";

export const Home = () => {
  return (
    <Layout>
      <Banner />
      <Details />
      <Featured />
      <TopBooks />
      <TopCategory />
    </Layout>
  );
};
