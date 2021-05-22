import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Map from "../assets/images/location.png"

export default function Landing() {
  return (
    <div>
      <Navbar />
      {/* Cover */}
      <section className="contain bg-cover w-screen h-screen bg-landing-cover pb-10">
        <div className="bg-white bg-opacity-25 w-screen h-screen flex flex-col justify-center items-center">
          <h1 className="text-center text-white w-2/3 text-6xl font-serif font-bold mb-10 text-shadow-lg">Welcome to the best tapas restaurant in Katowice!</h1>
          <a href="/menu">
            <button className="flex items-center justify-center rounded-md bg-yellow-500 text-white font-serif font-bold text-5xl p-2 m-8 shadow-2xl">ORDER NOW</button>
          </a>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="text-white font-serif rounded-lg flex flex-col justify-center items-center mt-64">
        <div className="bg-yellow-500 w-1/3 h-1/2 font-serif rounded-lg flex flex-col justify-center items-center p-8">
          <h3 className="font-bold text-3xl">Opening Hours:</h3>
          <span className="text-xl">Mon-Sun 12:00-22:00</span>
        </div>
      </section>

      {/* Where to find us + contact */}
      <section className="w-screen h-screen flex flex-col justify-center items-center font-serif">
        <div className="bg-gray-100 w-2/3 h-1/2 grid grid-cols-2 rounded-lg">
          <div className="text-center flex flex-col justify-center items-center flex-grow p-10">
            <h2 className="text-3xl font-bold text-yellow-500">Where to find us</h2>
            <span className="text-xl">Sucha 7A, Sosnowiec<br />Come visit us or order online:</span>
            <a href="/menu">
              <button className="flex items-center justify-center rounded-md bg-yellow-500 text-white font-serif font-bold text-xl p-2 m-8">See menu</button>
            </a>
            <h2 className="text-3xl font-bold text-yellow-500">Contact us</h2>
            <span className="text-xl">+48 633 537 054</span>
          </div>
          <div className="text-center flex flex-col justify-center items-center flex-grow p-10">
            <img src={Map} alt="google maps location, Sucha 7a"></img>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />


      {/*
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Menu
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                What about us?
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Tapas}
            />
          </div>
        </div>
      </section>*/}
    </div>
  );
}
