import { useEffect, useState } from "react";
import Login from "components/Login";
import Setup from "components/Setup";
import PageTitle from "utils/PageTitle";
import parseJWT from "utils/parseJWT";
import "styles/Pages/Main.scss";
import Footer from "components/Layout/Footer";

function Main() {
  const [show, setShow] = useState("login");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      if (parseJWT(token).exp * 1000 > Date.now()) setShow("setup");
    }
  }, [token]);

  return (
    <div className="main-container">
      {show !== "setup" && <PageTitle title={show.charAt(0).toUpperCase() + show.substring(1)} />}
      {show !== "setup" && (
        <>
          <div className="header-image-container">
            <div className="header-image"></div>
          </div>
          <div className="main-form-content">
            <div className="index-margin" style={{ position: "relative" }}>
              <div className="card">
                <div style={{ position: "absolute", top: 32 }} className="flex gap-10 align-center justify-center">
                  <img src="/logo.png" height={60} alt="logo" />
                  <span className="inter-bold" style={{ fontSize: 40 }}>
                    Elixir
                  </span>
                </div>
                {show === "login" ? <Login setShow={setShow} /> : null}
              </div>
              <Footer
                className="flex-between gray-400 text-xs"
                style={{ position: "absolute", bottom: 24, width: "100%" }}
                mainPage
              />
            </div>
          </div>
        </>
      )}
      {show === "setup" && <Setup />}
    </div>
  );
}

export default Main;
