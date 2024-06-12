"use client";

import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import Link from "next/link";
import "./Navbar.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const router = useRouter();
  return (
    <div>
      {toggleNav && (
        <div className="toggleNav">
          <div className="toggleNavItems">
            <X
              className="closeMenu"
              onClick={() => {
                setToggleNav(false);
                document.body.classList.remove("modal-open");
              }}
            />

            <li
              onClick={() => {
                setToggleNav(false);
                document.body.classList.remove("modal-open");
              }}
              className="toggleLink"
            >
              Home
            </li>
            <li
              onClick={() => {
                setToggleNav(false);
                document.body.classList.remove("modal-open");
              }}
              className="toggleLink"
            >
              Shop
            </li>
            <li
              onClick={() => {
                setToggleNav(false);
                document.body.classList.remove("modal-open");
              }}
              className="toggleLink"
            >
              About
            </li>
            <li
              onClick={() => {
                setToggleNav(false);
                document.body.classList.remove("modal-open");
              }}
              className="toggleLink"
            >
              Contact
            </li>
          </div>
        </div>
      )}
      <div className="container">
        <div className="menu">
          <Menu
            onClick={() => {
              setToggleNav(true);
              document.body.classList.add("modal-open");
            }}
          />
        </div>
        <div className="links">
          <Link className="link" href={"/"}>
            Home
          </Link>
          <Link className="link" href={"/"}>
            Shop
          </Link>
          <Link className="link" href={"/"}>
            About
          </Link>
          <Link className="link" href={"/"}>
            Contact
          </Link>
        </div>
        <div className="iconLinks">
          <User size={22} className="iconLink" />
          <Search size={22} className="iconLink" />
          <Heart size={22} className="iconLink" />
          <ShoppingCart
            onClick={() => router.push("/cart")}
            size={22}
            className="iconLink"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
