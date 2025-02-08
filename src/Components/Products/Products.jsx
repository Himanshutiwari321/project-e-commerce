import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-blue-600">
            Top Selling Products for you{" "}
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products{" "}
          </h1>
          <p data-aos="fade-up" className="text-xm text-gray-400">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            culpa corporis iste!
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm-grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt="cover image"
                  className="h-[220px] w-[220px] abject-cover rounded-md"
                />
                <div>
                  <h3 className="font-bold">{data.title}</h3>
                  <p className="text-sm text-gray-400">{data.color}</p>
                  <div className="text-yellow-400">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-poiter bg-blue-800 text-white py-1 px-5 rounded-md">
              view All button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
