function Footer() {
  const showCookieBanner = () => {
    const cookieBanner = document.querySelector(
      ".cky-consent-container.cky-classic-bottom"
    );
    if (cookieBanner) {
      cookieBanner.classList.remove("cky-hide");
      cookieBanner.classList.add("cky-consent-bar-expand");
    }
  };

  return (
    <footer id="footer">
      <div className="row bg-light text-center text-primary py-5 align-items-center">
        <div className="col-lg-12 mt-5 mt-lg-0">
          <h3 className="align-middle">Síguenos en nuestras Redes Sociales!</h3>
          <a
            href="https://appurl.io/3r7LfdDgjo"
            target="_blank"
            className="btn btn-outline-danger btn-lg m-3"
            data-toggle="tooltip"
            data-placement="top"
            title="Youtube"
            rel="noreferrer"
          >
            <i className="fab fa-youtube-square fa-1x"></i>
          </a>
          <a
            href="https://appurl.io/TzLcAIS-kx"
            target="_blank"
            className="btn btn-outline-success btn-lg m-3"
            data-toggle="tooltip"
            data-placement="top"
            title="Spotify"
            rel="noreferrer"
          >
            <i className="fab fa-spotify fa-1x"></i>
          </a>
          <a
            href="https://appurl.io/KSHH6WkWci"
            target="_blank"
            className="btn btn-outline-danger btn-lg m-3"
            data-toggle="tooltip"
            data-placement="top"
            title="Soundcloud"
            rel="noreferrer"
          >
            <i className="fab fa-soundcloud fa-1x"></i>
          </a>
          <a
            href="https://appurl.io/x1MbsXtvao"
            target="_blank"
            className="btn btn-outline-dark btn-lg m-3"
            data-toggle="tooltip"
            data-placement="top"
            title="Bandcamp"
            rel="noreferrer"
          >
            <i className="fab fa-bandcamp fa-1x"></i>
          </a>
          <a
            href="https://www.jamendo.com/artist/342136/chatarra"
            target="_blank"
            className="btn btn-outline-dark m-3"
            data-toggle="tooltip"
            data-placement="top"
            title="Jamendo"
            rel="noreferrer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/chatarra-rock.appspot.com/o/images%2Fjamendo.png?alt=media&token=92ee56eb-578f-4753-831a-2b88dc7f06f8"
              className="img-fluid my-1"
              alt="jamendo logo"
              style={{ maxWidth: "30px" }}
            />
          </a>
          <a
            href="https://appurl.io/MBeyKIjQSs"
            target="_blank"
            className="btn btn-outline-primary btn-lg m-3"
            data-toggle="tooltip"
            data-placement="top"
            title="Facebook"
            rel="noreferrer"
          >
            <i className="fab fa-facebook fa-1x"></i>
          </a>
          <a
            href="https://appurl.io/w0cv1LLfpi"
            target="_blank"
            className="btn btn-outline-danger btn-lg m-3"
            data-toggle="tooltip"
            data-placement="top"
            title="Instagram"
            rel="noreferrer"
          >
            <i className="fab fa-instagram fa-1x"></i>
          </a>
          <a
            href="https://appurl.io/pgtJXuFv7H"
            target="_blank"
            className="btn btn-outline-info btn-lg m-3"
            data-toggle="tooltip"
            data-placement="top"
            title="Twitter"
            rel="noreferrer"
          >
            <i className="fab fa-twitter fa-1x"></i>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 text-center py-3 bg-light">
          <small>Copyright © 2020, Chatarra. All rights reserved.</small>
          <p>
            <a
              role="button"
              className="text-primary"
              onClick={showCookieBanner}
            >
              <small>Preferencia de cookies</small>
            </a>
          </p>

          {/* <Link to="/login" className="ml-1"><small>Backoffice</small></Link> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
