import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer">
      <div className="row bg-light text-center text-primary py-5 align-items-center">
        <div className="col-lg-12 mt-5 mt-lg-0">
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
              src="https://firebasestorage.googleapis.com/v0/b/chatarra-rock.appspot.com/o/images%2Fjamendo.png?alt=media&token=92ee56eb-578f-4753-831a-2b88dc7f06f8"
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
          {/* <Link to="/login" className="ml-1"><small>Backoffice</small></Link> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
