// import Navbarprivate from "./Navbarprivate";
import Hero from "../component/Hero";
import Featuredjobs from "../component/Featuredjobs";
import Categories from "../component/Categories";
import Footer from "../component/Footer";
import Apnavbar from "./Apnavbar";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbarprivate/> */}
      <Apnavbar/>
      <main className="flex-grow">
        <Hero />
        <Featuredjobs />
        <Categories />
      </main>
      <Footer />
    </div>
  );
}
