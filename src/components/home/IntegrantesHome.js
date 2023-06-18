function IntegrantesHome() {
  return (
    <div id="sala" className="row justify-content-around py-5 my-5">
      <div className="col-lg-3">
        <div className="card border-dark bg-dark text-light text-center mx-lg-0 mx-5">
          <div id="bg-guitarrista" className="card-body"></div>
          <div className="text-band pt-3">
            <h4>Chusaco</h4>
            <p>Voz y guitarra </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="card border-dark bg-dark text-light text-center mt-5 mt-lg-0 mx-lg-0 mx-5">
          <div id="bg-baterista" className="card-body"></div>
          <div className="text-band pt-3">
            <h4>RodMetaL</h4>
            <p>Batería</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="card border-dark bg-dark text-light text-center mt-5 mt-lg-0 mx-lg-0 mx-5">
          <div id="bg-bajista" className="card-body"></div>
          <div className="text-band pt-3">
            <h4>Dario</h4>
            <p>Bajo y coros</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntegrantesHome;
