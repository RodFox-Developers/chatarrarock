import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <div id="errorPage">
        <h2>404</h2>
        <h1>Page Not Found</h1>
        <p>
          The specified file was not found on this website. Please check the URL
          for mistakes and try again.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
