function Contacto() {

    return (
      <section className="bg-paper01 py-5">
        <div className="row">
          <div className="col-lg-12 my-5 text-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/chatarra-rock.appspot.com/o/images%2Flogo-estrella-sm.png?alt=media&token=c24ae8d6-5608-45c4-ac64-65624c645173"
              alt="estrella chatarra"
              className="img-fluid estrella"
            />
            <h3 className="d-inline mx-4">Contacto</h3>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/chatarra-rock.appspot.com/o/images%2Flogo-estrella-sm.png?alt=media&token=c24ae8d6-5608-45c4-ac64-65624c645173"
              alt="estrella chatarra"
              className="img-fluid estrella"
            />
          </div>
        </div>
        <div className="row text-center mb-5">
          <div className="col-lg-12">
            <a
              href="https://www.youtube.com/channel/UCSrQ7KZ_VdEGsE53ALl-Z-g"
              target="_blank"
              rel="noreferrer"
              className="mx-5"
              data-toggle="tooltip"
              data-placement="top"
              title="Youtube"
            >
              <i className="fab fa-youtube-square fa-4x text-danger"></i>
            </a>
            <a
              href="https://open.spotify.com/artist/7AtmpUfNKk9jraaAoOv9Da"
              target="_blank"
              rel="noreferrer"
              className="mx-5"
              data-toggle="tooltip"
              data-placement="top"
              title="Spotify"
            >
              <i className="fab fa-spotify fa-4x text-success"></i>
            </a>
            <a
              href="https://soundcloud.com/chatarra-rock"
              target="_blank"
              rel="noreferrer"
              className="mx-5"
              data-toggle="tooltip"
              data-placement="top"
              title="Soundcloud"
            >
              <i className="fab fa-soundcloud fa-4x text-danger"></i>
            </a>
          </div>
          <div className="col-lg-12 text-primary fa-size my-5">
            <i className="far fa-envelope fa-4x"></i>
            <h4>
              <a href="mailto:chatarrarock@protonmail.com">
                chatarrarock@protonmail.com
              </a>
            </h4>
          </div>
          <div className="col-lg-12 my-5 fa-size">
            <a
              href="https://chatarra.bandcamp.com/"
              target="_blank"
              rel="noreferrer"
              className="mx-5"
              data-toggle="tooltip"
              data-placement="top"
              title="Bandcamp"
            >
              <i className="fab fa-bandcamp fa-4x"></i>
            </a>
            <a
              href="https://www.facebook.com/Chatarra-241987021881/"
              target="_blank"
              rel="noreferrer"
              className="mx-5"
              data-toggle="tooltip"
              data-placement="top"
              title="Facebook"
            >
              <i className="fab fa-facebook fa-4x text-primary"></i>
            </a>
            <a
              href="https://www.instagram.com/Chatarrarock/"
              target="_blank"
              rel="noreferrer"
              className="mx-5"
              data-toggle="tooltip"
              data-placement="top"
              title="Instagram"
            >
              <i className="fab fa-instagram fa-4x text-danger mt-4"></i>
            </a>
            <a
              href="https://twitter.com/ChatarraRock"
              target="_blank"
              rel="noreferrer"
              className="mx-5"
              data-toggle="tooltip"
              data-placement="top"
              title="Twitter"
            >
              <i className="fab fa-twitter fa-4x text-info mt-4"></i>
            </a>
          </div>
          <div className="col-lg-12">
            <a
              href="https://www.jamendo.com/artist/342136/chatarra"
              target="_blank"
              rel="noreferrer"
              className="mx-5"
              data-toggle="tooltip"
              data-placement="top"
              title="Jamendo"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/chatarra-c89b9.appspot.com/o/images%2Fjamendo-logo-btn.png?alt=media&token=856c26db-4ce5-479f-a09a-d51d9eda1a02"
                className="img-fluid my-1"
                alt="jamendo logo"
                style={{ maxWidth: "100px" }}
              />
            </a>
          </div>
        </div>
      </section>
    );

}

export default Contacto;
