import React, { Component } from "react";

class Rider extends Component {
  render() {
    return (
      <>
        <div class="row">
          <div class="col-lg-12 text-center bg-rider pt-5">
            <h1 class="display-2 font-weight-bold">Rider Técnico</h1>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-lg-12 text-center font-weight-bold">
            <a
              href="https://es.musicotec.com/riders/852990"
              class="btn btn-primary btn-lg px-5 py-3"
              target="_blank"
              rel="noreferrer"
            >
              Ver Rider Técnico
            </a>
          </div>
          <div class="col-lg-12 text-center mt-5">
            <a
              href="https://firebasestorage.googleapis.com/v0/b/chatarra-c89b9.appspot.com/o/images%2Frider%2Frider-2023-03-20.pdf?alt=media&token=88a42651-994c-4ba0-99e4-9b3f6d53050d"
              class="btn btn-secondary"
              download="Chatarra - rider"
              target="_blank"
              rel="noreferrer"
            >
              Descargar Rider Técnico
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Rider;
