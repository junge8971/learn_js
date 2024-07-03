import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <p>
        <Link to={"/"}>Home</Link>
      </p>
      <p>
        <Link to={"/posts"}>Posts</Link>
      </p>
      <p>
        <Link to={"/about_us"}>About</Link>
      </p>
    </nav>
  );
}
