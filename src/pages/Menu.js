import "../App.css";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

export default function Landing() {
  
  return (
    <div>
      <Navbar />
      <div>
          <h1 className="flex justify-center title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Menu
          </h1>
          <Product name="Burger"></Product>
      </div>
    </div>
  );
}
