import { Outlet, ScrollRestoration } from "react-router-dom";
import MainNavigation from "../components/shared/MainNavigation";
import Footer from "../components/shared/Footer";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <ScrollRestoration
          getKey={(location, matches) => {
            // default behavior
            return location.key;
          }}
        />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
