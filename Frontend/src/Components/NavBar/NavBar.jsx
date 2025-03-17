import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { CiShoppingCart } from "react-icons/ci";

const navLink = [
  { name: "Home", path: "/" },
  // { name: "About Us", path: "/AboutUs" },
  // { name: "Cart", path: "/Cart" },
  { name: "Contact Us", path: "/ContactUs" },
];

function NavBar() {
  // Cart Data From Redux Toolkitt State
  const CartData = useSelector((state) => state?.cart);

  const [isMenuOpen, setisMenuOpen] = useState(false);
  const togleMenu = () => setisMenuOpen(!isMenuOpen);
  const navigate = useNavigate();

  const cartLength = CartData?.length;
  if (CartData?.length == '') {
    cartLength == 0
  }
console.log("cartLength ",cartLength);
  // LogOut
  const handlelogOut = () => {
    try {
      navigate("/login");
    } catch (error) {
      console.log("Error in Logout User", error);
    }
  };
  return (
    <>
      <header className="bg-white py-6 border">
        <nav className="container mx-auto flex justify-between px-5 text-center">
          {/* logo */}
          <Link to={'/'} className="block w-48 ">
            <svg
              version="1.1"
              viewBox="0 0 3368 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(0 -75)">
                  <g transform="translate(0 75)">
                    <rect
                      width="512"
                      height="500"
                      rx="128"
                      fill="#3D5AFE"
                    ></rect>
                    <rect
                      x="149"
                      y="176"
                      width="220"
                      height="220"
                      fill="#fff"
                    ></rect>
                    <circle cx="259" cy="156" r="40" fill="#fff"></circle>
                    <circle cx="369" cy="286" r="40" fill="#2962FF"></circle>
                  </g>
                  <text
                    fill="black"
                    font-family="Nunito-Bold, Nunito"
                    font-size="400"
                    font-weight="bold"
                    className="md:mb-2"
                  >
                    <tspan x="654" y="518">
                      Ecommerce
                    </tspan>
                  </text>
                </g>
              </g>
            </svg>
          </Link>


          {/* cart logo for mobile view */}

          <div className="relative  md:hidden">
            <Link to={"/Cart"}>
              <CiShoppingCart
                className=""
                style={{
                  fontSize: "25px",
                }}
              />
              <div className="topleft absolute">{cartLength}</div>
            </Link>
          </div>

          {/* Desktop */}

          <ul className="sm:flex hidden items-center gap-8">
            {navLink?.map((link, index) => (
              <li key={index} className="text-black">
                <NavLink
                  to={link.path}
                  style={{ whiteSpace: "nowrap" }}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            <li className="relative">
              <Link to={"/Cart"}>
                <CiShoppingCart
                  className=""
                  style={{
                    fontSize: "25px",
                  }}
                />
                <div className="topleft absolute">{cartLength}</div>
              </Link>
            </li>
            <li style={{ alignItems: "end" }}>
              <Link to={"/login"}>
                <button className="login-btn  px-4 py-1.5 text-black rounded-sm">
                  Login
                </button>
              </Link>
              {/* <button  ><NavLink to="/login">Login</NavLink></button>  */}
            </li>
            <li>
              <Link to={"/dashboard"}>
                <button className="dashboard px-4 py-1.5 text-black rounded-sm">
                  DashBoard
                </button>
              </Link>
            </li>
          </ul>
          <div className="flex items-center sm:hidden">
            <button
              className="flex items-center px-3 bg-[#fafafa] rounded text-sm text-gray-500 hover:text-gray-300"
              onClick={togleMenu}
            >
              {isMenuOpen ? (
                <IoClose className="size-6" />
              ) : (
                <IoMenuSharp className="size-6" />
              )}
            </button>
          </div>

          {/* mobile Menu */}
          {isMenuOpen && (
            <ul className="fixed md:hidden top-[80px] w-full left-0 h-auto pb-8 border-b bg-white shadow-sm z-50">
              {navLink?.map((link, index) => (
                <li key={index} className="mt-5 px-4">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li className="mt-5 px-4">
                <Link to={"/login"}>
                  <button className="login-btn  px-4 py-1.5 text-black rounded-sm">
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/dashboard"}>
                  <button className=" dashboard text-black mt-2 px-4 py-1.5 rounded-sm">
                    DashBoard
                  </button>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </header>
    </>
  );
}

export default NavBar;

{
  /* If User Role is Role */
}
//   {
//     user && user.role === 'user'? (<li className='flex items-center gap-3'>
//         <img src='' alt='userProfileImg' className='size-8'/>
//         <button onClick={handlelogOut} className='bg-[#1E73BE] px-4 py-1.5 text-white rounded-sm'>
//             LogOut</button>
//     </li>):(
//         <li>
//         <NavLink to='/login'>Login</NavLink>
//     </li>
//     )
// }

{
  /*If User is Admin*/
}
// {
//     user && user.role === 'admin' && (<li className='flex items-center gap-3'>
//         <img src='' alt='userProfileImg' className='size-8'/>
//         <Link  to={'/dashboard'}><button className='bg-[#1E73BE] px-4 py-1.5 text-white rounded-sm'>DashBoard</button></Link>
//     </li>)
// }
