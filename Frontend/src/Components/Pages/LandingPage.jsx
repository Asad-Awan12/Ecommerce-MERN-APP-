import React from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="w-full">
      <div className="flex bg-white" style={{ height: "600px" }}>
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
              Ecommerce App with <span className="text-indigo-600">Tailwind Css</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              An online store where customers can find products, browse
              offerings, and place purchases online. It facilitates the
              transaction between a buyer and seller. A digital storefront can
              serve as the virtual equivalent of the product shelves, sales
              staff, and cash register of a physical shop.
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <Link
                className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                to={'/Cart'}
              >
                Shop Now
              </Link>
              <Link
                className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                to={'/ContactUs'}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        {/* clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%) */}
        <div
          className="hidden lg:block lg:w-1/2"
          style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <div
            className="h-full object-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)",
            }}
          >
            <div className="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
