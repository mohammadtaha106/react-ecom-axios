import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar  mb-4  bg-orange-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className=" menu menu-sm dropdown-content ">
        <li className="text-5xl font-bold text-orange-500"><Link to={"/products"}>Products </Link></li>
         
        
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl text-orange-600"  style={{ fontFamily: 'Cursive, sans-serif' }}>&lt;Ecom /&gt;</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to={"/products"}>Products </Link></li>
     
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Sign In</a>
  </div>
</div>
  );
}

export default Header;
