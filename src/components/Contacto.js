function Contacto() {

    return (
      <section className="bg-contacto-cache py-5">
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
              href="https://appurl.io/3r7LfdDgjo"
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
              href="https://appurl.io/TzLcAIS-kx"
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
              href="https://appurl.io/KSHH6WkWci"
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
              <a href="mailto:chatarrarock@gmail.com">
                chatarrarock@gmail.com
              </a>
            </h4>
          </div>
          <div className="col-lg-12 my-5 fa-size">
            <a
              href="https://appurl.io/x1MbsXtvao"
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
              href="https://appurl.io/MBeyKIjQSs"
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
              href="https://appurl.io/w0cv1LLfpi"
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
              href="https://appurl.io/pgtJXuFv7H"
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
                src="https://firebasestorage.googleapis.com/v0/b/chatarra-rock.appspot.com/o/images%2Fjamendo.png?alt=media&token=92ee56eb-578f-4753-831a-2b88dc7f06f8"
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
