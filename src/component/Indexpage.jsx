import Apnavbar from "../component/Apnavbar";
// import Navbarprivate from "./Navbarprivate";
import bgimage from"../assets/bgimg.png";
import Hero from "../component/Hero";
import Featuredjobs from "../component/Featuredjobs";
import Categories from "../component/Categories";
import Footer from "../component/Footer";
import Products from "./Products";


export default function Indexpage() {
  return (
    <div>
     <div
        className="w-full bg-center bg-cover opacity-90 flex-1 pb-16"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
    <div className="min-h-screen flex flex-col">
      {/* <Navbarprivate/> */}
      <Apnavbar/>
      <main className="flex-grow">
        <Hero />
        <Products/>
      </main>
     
    </div>
    </div>
     <Footer />
     </div>
  );
}
