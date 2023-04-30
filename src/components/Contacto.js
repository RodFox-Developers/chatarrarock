import React, { Component } from "react";

class Contacto extends Component {
  render() {
    return (
      <section class="bg-paper01 py-5">
        <div class="row">
          <div class="col-lg-12 my-5 text-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/chatarra-c89b9.appspot.com/o/images%2Fimg-logo-estrella-sm.png?alt=media&token=f8d510db-2b79-496b-b7dd-77c6244f6d08"
              alt="estrella chatarra"
              class="img-fluid estrella"
            />
            <h3 class="d-inline mx-4">Contacto</h3>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/chatarra-c89b9.appspot.com/o/images%2Fimg-logo-estrella-sm.png?alt=media&token=f8d510db-2b79-496b-b7dd-77c6244f6d08"
              alt="estrella chatarra"
              class="img-fluid estrella"
            />
          </div>
        </div>
        <div class="row text-center mb-5">
          <div class="col-lg-12">
            <a
              href="https://www.youtube.com/channel/UCSrQ7KZ_VdEGsE53ALl-Z-g"
              target="_blank"
              rel="noreferrer"
              class="mx-5"
              data-toggle="tooltip"
              data-placement="top"
              title="Youtube"
            >
              <i class="fab fa-youtube-square fa-4x text-danger"></i>
            </a>
            <a
              href="https://open.spotify.com/artist/7AtmpUfNKk9jraaAoOv9Da"
              target="_blank"
              rel="noreferrer"
              class="mx-5"
              data-toggle="tooltip"
              data-placement="top"
              title="Spotify"
            >
              <i class="fab fa-spotify fa-4x text-success"></i>
            </a>
            <a
              href="https://soundcloud.com/chatarra-rock"
              target="_blank"
              rel="noreferrer"
              class="mx-5"
              data-toggle="tooltip"
              data-placement="top"
              title="Soundcloud"
            >
              <i class="fab fa-soundcloud fa-4x text-danger"></i>
            </a>
          </div>
          <div class="col-lg-12 text-primary fa-size my-5">
            <i class="far fa-envelope fa-4x"></i>
            <h4>
              <a href="mailto:chatarrarock@protonmail.com">
                chatarrarock@protonmail.com
              </a>
            </h4>
          </div>
          <div class="col-lg-12 my-5 fa-size">
            <a
              href="https://chatarra.bandcamp.com/"
              target="_blank"
              rel="noreferrer"
              class="mx-5"
              data-toggle="tooltip"
              data-placement="top"
              title="Bandcamp"
            >
              <i class="fab fa-bandcamp fa-4x"></i>
            </a>
            <a
              href="https://www.facebook.com/Chatarra-241987021881/"
              target="_blank"
              rel="noreferrer"
              class="mx-5"
              data-toggle="tooltip"
              data-placement="top"
              title="Facebook"
            >
              <i class="fab fa-facebook fa-4x text-primary"></i>
            </a>
            <a
              href="https://www.instagram.com/Chatarrarock/"
              target="_blank"
              rel="noreferrer"
              class="mx-5"
              data-toggle="tooltip"
              data-placement="top"
              title="Instagram"
            >
              <i class="fab fa-instagram fa-4x text-danger mt-4"></i>
            </a>
            <a
              href="https://twitter.com/ChatarraRock"
              target="_blank"
              rel="noreferrer"
              class="mx-5"
              data-toggle="tooltip"
              data-placement="top"
              title="Twitter"
            >
              <i class="fab fa-twitter fa-4x text-info mt-4"></i>
            </a>
          </div>
          <div class="col-lg-12">
            <a
              href="https://www.jamendo.com/artist/342136/chatarra"
              target="_blank"
              rel="noreferrer"
              class="mx-5"
              data-toggle="tooltip"
              data-placement="top"
              title="Jamendo"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/chatarra-c89b9.appspot.com/o/images%2Fjamendo-logo-btn.png?alt=media&token=856c26db-4ce5-479f-a09a-d51d9eda1a02"
                class="img-fluid my-1"
                alt="jamendo logo"
                style={{ maxWidth: "100px" }}
              />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacto;
