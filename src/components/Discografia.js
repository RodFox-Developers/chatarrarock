function Discografia(props) {    
  return (
    <section id="albumes" className="bg-paper02 py-5">
      {
        Object.values(props).map(x => x.map(album => {          
          return (
            <div className="row justify-content-center my-5">
              <div className="col-md-8 col-lg-6">
                <iframe
                  title="Discografía Chatarra Rock"
                  style={{borderRadius:'12px'}}
                  src={album.spotify}
                  width="100%"
                  height="600px"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </div>
            </div>
          )
        }).reverse())
      }
    </section>
  );
}

export default Discografia;


