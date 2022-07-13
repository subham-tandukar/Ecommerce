import React, { useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

const Header = () => {
  const [logoutBox, setLogoutBox] = useState({
    opacity: "0",
  });

  $(function() {
    $(".btn")
      .on("mouseenter", function(e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this)
          .find("span")
          .css({ top: relY, left: relX });
      })
      .on("mouseout", function(e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this)
          .find("span")
          .css({ top: relY, left: relX });
      });
    // $("[href=!#]").onClick(function() {
    //   return false;
    // });
  });

  const logOut = () => {
    setLogoutBox({
      opacity: "1",
      zIndex: "2",
    });
  };
  const close = () => {
    setLogoutBox({
      opacity: "0",
    });
  };

  return (
    <>
      <div className="logout" style={logoutBox}>
        <div className="logout-box">
          <span>Are you sure you want to log out?</span>
          <div>
            <span>
              <Link to="/" className="btn">
                Yes
              </Link>
              <button type="button" onClick={close} className="btn">
                No
              </button>
            </span>
          </div>
        </div>
      </div>
      <header>
        <div
          className="head uk-container uk-container-expand uk-flex uk-flex-middle uk-flex-between"
          uk-sticky="top:300; animation: uk-animation-slide-top;"
        >
          <div className="uk-flex uk-flex-middle">
            <Link to="/homepage">
              <img
                src="images/logo.png"
                alt="logo"
                className="logo"
                style={{ height: "50px" }}
              />
            </Link>
            <p className="uk-margin-medium-left uk-margin-medium-right uk-flex uk-flex-middle uk-visible@l">
              <i
                className="fa fa-map-marker fa-2x uk-margin-small-right"
                aria-hidden="true"
              ></i>
              Jawalakhel
            </p>
            <p className="uk-flex uk-flex-middle uk-visible@l">
              <i
                className="fa fa-phone fa-2x uk-margin-small-right"
                aria-hidden="true"
              ></i>
              9841123456
            </p>
          </div>

          <div>
            <form className="uk-search uk-search-default uk-visible@l">
              <a
                href="#"
                className="uk-search-icon-flip "
                title="Search"
                uk-search-icon="true"
              ></a>
              <input
                className="uk-search-input"
                type="search"
                placeholder="Search"
              />
            </form>
          </div>

          <div className="uk-flex uk-flex-middle uk-visible@l">
            <a href="#" className="shop" title="Shop">
              <span uk-icon="icon: cart"></span>
              <span className="shop-items">3</span>
            </a>

            <a href="#" className="user uk-margin-medium-left" title="Account">
              <span uk-icon="icon: user"></span>
            </a>

            <button
              type="button"
              className="btn btn-secondary uk-margin-medium-left"
              onClick={logOut}
            >
              <span></span>Log out
            </button>
          </div>

          <div className="uk-hidden@l hamburger-menu">
            <a href="#" uk-toggle="target: #offcanvas-slide">
              <span uk-icon="icon: menu"></span>
            </a>
          </div>
        </div>

        {/* <!-- for mobile version starts--> */}
        <div
          className="mob-head uk-hidden@l  uk-navbar"
          uk-sticky="top:300; animation: uk-animation-slide-top"
        >
          <div className="nav-overlay uk-navbar-left uk-margin-left">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={logOut}
            >
              <span></span>Log out
            </button>
          </div>

          <div className="nav-overlay uk-navbar-right">
            <a
              className="uk-navbar-toggle"
              uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
              href=""
              style={{ color: "#fff" }}
              title="Search"
              uk-search-icon="true"
            ></a>
          </div>

          <div className="nav-overlay uk-navbar-left uk-flex-1" hidden>
            <div className="uk-navbar-item uk-width-expand">
              <form className="uk-search uk-search-navbar uk-width-1-1">
                <input
                  className="uk-search-input"
                  type="search"
                  placeholder="Search"
                  autoFocus
                />
              </form>
            </div>

            <a
              className="uk-navbar-toggle"
              uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
              href="#"
              uk-search-icon="true"
            ></a>
          </div>
        </div>
        {/* <!-- for mobile version ends--> */}

        {/* <!-- side-menu-bar starts --> */}
        <div id="offcanvas-slide" uk-offcanvas="overlay: true">
          <div className="overlay"></div>
          <div className="uk-offcanvas-bar">
            <button
              className="uk-offcanvas-close"
              type="button"
              uk-close="true"
              style={{ color: "#0b0b45" }}
            ></button>

            <div className="uk-text-center">
              <a href="#">
                <img
                  src="images/logo.png"
                  alt="logo"
                  className="logo"
                  style={{ height: "50px" }}
                />
              </a>
            </div>

            <div className="uk-margin-medium-top uk-flex">
              <a
                href="#"
                className="user uk-margin-medium-left"
                title="Account"
              >
                <span uk-icon="icon: user"></span>
              </a>

              <a href="#" className="shop uk-margin-medium-left" title="Shop">
                <span uk-icon="icon: cart"></span>
                <span className="shop-items">3</span>
              </a>
            </div>

            <div className="uk-margin-medium-top uk-padding uk-padding-remove-vertical">
              <p>
                <i
                  className="fa fa-map-marker fa-2x uk-margin-small-right"
                  aria-hidden="true"
                ></i>
                Jawalakhel
              </p>
              <p>
                <i
                  className="fa fa-phone fa-2x uk-margin-small-right"
                  aria-hidden="true"
                ></i>
                9841123456
              </p>
            </div>
          </div>
        </div>
        {/* <!-- side-menu-bar ends --> */}
      </header>
    </>
  );
};

export default Header;
