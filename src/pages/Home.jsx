
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="py-16 bg-orange-100 text-center">
        <h2 className="text-5xl font-bold text-orange-500">Welcome to &lt;Ecom/&gt;</h2>
        <p className="mt-4 text-lg">
          Discover the best deals on makeup, clothes, groceries, meat, and much more.
        </p>
        <button className="mt-6 px-8 py-4 bg-orange-500 text-white font-bold rounded"><Link to={"/products"}> 
          Start Shopping</Link>
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 container mx-auto text-center">
        <h3 className="text-3xl font-bold text-orange-500 mb-6">About Us</h3>
        <p className="text-lg leading-8">
          &lt;ecom/&gt; is your one-stop destination for all your shopping needs. Whether you are
          looking for the latest in fashion, everyday grocery items, or fresh meat, we have it all!
          Our goal is to provide high-quality products at competitive prices, delivered right to your doorstep.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-orange-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-orange-500 mb-6">Why Shop with Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold">Wide Range of Products</h4>
              <p className="mt-4">
                From makeup and clothes to groceries and meat, we offer a huge selection of items to suit your needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold">Best Prices</h4>
              <p className="mt-4">
                We offer competitive pricing across all our categories, ensuring that you get the best value for your money.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold">Fast & Reliable Delivery</h4>
              <p className="mt-4">
                Our fast delivery ensures that your orders reach you in no time, safely and securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 container mx-auto text-center">
        <h3 className="text-3xl font-bold text-orange-500 mb-6">What Our Customers Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg italic">
              "I love shopping at &lt;ecom/&gt;. Their selection is amazing, and the delivery is always on time!"
            </p>
            <h5 className="mt-4 font-bold">- Sarah K.</h5>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg italic">
              "The quality of the products is top-notch, and their customer service is outstanding!"
            </p>
            <h5 className="mt-4 font-bold">- John D.</h5>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-orange-100 text-center">
        <h3 className="text-3xl font-bold text-orange-500">Ready to Shop?</h3>
        <p className="mt-4 text-lg">
          Browse through our wide range of products and enjoy an unbeatable shopping experience.
        </p>
        <button className="mt-6 px-8 py-4 bg-orange-500 text-white font-bold rounded"><Link to={"/products"}> 
          Start Shopping</Link>
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-orange-500 text-white py-4 text-center">
        <p>&copy; 2024 &lt;ecom/&gt;. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
