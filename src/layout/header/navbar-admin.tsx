"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import logo from "@/assets/images/logo/logo-white.png";
import logo_2 from "@/assets/images/logo/logome.png";
import icon_1 from "@/assets/images/icon/icon_14.svg";
import icon_2 from "@/assets/images/icon/icon_15.svg";
import menu_data from "@/data/menu-data";
import admin_menu_data from "@/data/admin-menu-data";
import { usePathname } from "next/navigation";

const NavbarAdmin = ({ logo_white = false }: { logo_white?: boolean }) => {
  const pathname = usePathname();
  return (
    <ul className="navbar-nav align-items-lg-center">
      <li className="d-block d-lg-none">
        <div className="logo">
          <Link href="/" className="d-block">
            <Image
              className=""
              width="165"
              height="60"
              src={logo_white ? logo_2 : logo}
              alt="logo"
            />
          </Link>
        </div>
      </li>
      {admin_menu_data.map((menu) => (
        <li
          key={menu.id}
          className={`nav-item ${menu.dropdown ? "dropdown" : ""} ${
            menu.mega_menu ? "dropdown mega-dropdown-sm" : ""
          } ${menu.sub_dropdown ? "dropdown" : ""}`}
        >
          {menu.dropdown && (
            <>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                {menu.title}
              </a>
              <ul className="dropdown-menu">
                {menu.dropdown_menus?.map((dm, i) => (
                  <li key={i}>
                    <Link
                      href={dm.link}
                      className={`dropdown-item ${
                        pathname === dm.link ? "active" : ""
                      }`}
                    >
                      <span>{dm.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          {menu.mega_menu && (
            <>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                {menu.title}
              </a>
              <ul className="dropdown-menu">
                <li className="row gx-1">
                  {menu.mega_menus?.map((mm, i) => (
                    <div key={mm.id} className="col-lg-4">
                      <div className="menu-column">
                        <ul className="style-none mega-dropdown-list">
                          <span
                            className="font-weight-bold dropdown-item bg-spancolor"
                            style={{ fontWeight: "500", fontSize: "20px" }}
                          >
                            {mm.subtitle}
                          </span>{" "}
                          {/*  add new subtitle for mega menu */}
                          {mm.menus.map((sm, i) => (
                            <li key={i}>
                              <Link
                                href={sm.link}
                                className={`dropdown-item ${
                                  pathname === sm.link ? "active" : ""
                                }`}
                              >
                                <span>{sm.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </li>
              </ul>
            </>
          )}
          {/* add new 2sub menu component start  */}
          {menu.sub_dropdown && (
            <>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                {menu.title}
              </a>
              <ul className="dropdown-menu">
                {menu.dropdown_submenus?.map((dm, i) => (
                  <li key={i} className={`${dm.sub_menus ? "dropdown" : ""}`}>
                    {dm.sub_menus ? (
                      <>
                        <a
                          className="nav-link dropdown-toggle"
                          style={{
                            color: "#2B2B2B",
                            fontWeight: "400",
                            margin: "0px",
                            padding: "8px 16px",
                          }}
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                          aria-expanded="false"
                        >
                          {dm.title}
                        </a>
                        <ul className="dropdown-menu">
                          {dm.sub_menus.map((aa, j) => (
                            <li key={j}>
                              <Link
                                href={aa.link}
                                style={{padding:"0px 15px"}}
                                className={`dropdown-item ${
                                  pathname === aa.link ? "active" : ""
                                }`}
                              >
                                <span>{aa.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        href={dm.link}
                        className={`dropdown-item ${
                          pathname === dm.link ? "active" : ""
                        }`}
                      >
                        <span>{dm.title}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
          {/* add new 2sub menu component end  */}
          {!menu.dropdown && !menu.mega_menu && !menu.sub_dropdown && (
            <Link className="nav-link" href={menu.link} role="button">
              {menu.title}
            </Link>
          )}
        </li>
      ))}
      <li className="d-md-none ps-2 pe-2">
        {/* <a
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
          className="signup-btn-one icon-link w-100 mt-20"
        >
          <span className="flex-fill text-center">Signup</span>
          <div className="icon rounded-circle d-flex align-items-center justify-content-center">
            <i className="bi bi-arrow-right"></i>
          </div>
        </a> */}
        {/* <ul className="style-none contact-info m0 pt-30">
          <li className="d-flex align-items-center p0 mt-15">
            <Image src={icon_1} alt="icon" className="lazy-img icon me-2" />
            <Link href="mailto:info@cgbindia.com" className="fw-500 text-white">
              info@cgbindia.com
            </Link>
          </li>
          <li className="d-flex align-items-center p0 mt-15">
            <Image src={icon_2} alt="icon" className="lazy-img icon me-2" />
            <Link href="tel:9888912909" className="fw-500 text-white">
              9888912909
            </Link>
          </li>
        </ul> */}
      </li>
    </ul>
  );
};

export default NavbarAdmin;
