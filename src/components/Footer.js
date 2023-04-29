function Footer() {
  return (
    <footer id="footer">
      <div className="row bg-light text-center text-primary py-5 align-items-center">
        <div className="col-lg-6">
          <a
            href="http://www.musikaze.com/chatarra-store"
            className="text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/chatarra-c89b9.appspot.com/o/images%2FFooter%2FImagen%20de%20WhatsApp%202023-02-11%20a%20las%2020.06.18%20-%20copia.jpg?alt=media&token=8d0ce776-05cc-44e0-bd24-bd1ed0bf6a21"
              className="img-fluid merchatarra"
              alt="merchatarra"
            />
            <h3 className="align-middle mt-3">Visita nuestra Tienda Online!</h3>
          </a>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0">
          <h3 className="align-middle">Síguenos en nuestras Redes Sociales!</h3>
          <a
            href="https://www.youtube.com/channel/UCSrQ7KZ_VdEGsE53ALl-Z-g"
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
            href="https://open.spotify.com/artist/7AtmpUfNKk9jraaAoOv9Da"
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
            href="https://soundcloud.com/chatarra-rock"
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
            href="https://chatarra.bandcamp.com/"
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
              src="https://firebasestorage.googleapis.com/v0/b/chatarra-c89b9.appspot.com/o/images%2Fjamendo-logo-btn.png?alt=media&token=856c26db-4ce5-479f-a09a-d51d9eda1a02"
              className="img-fluid my-1"
              alt="jamendo logo"
              style={{maxWidth: '30px'}}
            />
          </a>
          <a
            href="https://www.facebook.com/Chatarra-241987021881/"
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
            href="https://www.instagram.com/Chatarrarock/"
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
            href="https://twitter.com/ChatarraRock"
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
