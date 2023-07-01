function SpotifyHome() {
  return (
    <>
      <div className="row">
          <div className="col-lg-12 my-5 text-center">
              <img src="https://firebasestorage.googleapis.com/v0/b/chatarra-rock.appspot.com/o/images%2Flogo-estrella-sm.png?alt=media&token=c24ae8d6-5608-45c4-ac64-65624c645173" alt="estrella chatarra" className="img-fluid estrella"></img>
              <h3 className="d-inline mx-4">Nuestros últimos trabajos</h3>
              <img src="https://firebasestorage.googleapis.com/v0/b/chatarra-rock.appspot.com/o/images%2Flogo-estrella-sm.png?alt=media&token=c24ae8d6-5608-45c4-ac64-65624c645173" alt="estrella chatarra" className="img-fluid estrella"></img>
          </div>
      </div>
      <div className="row justify-content-center my-5">
          <div className="col-lg-6">
              <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/playlist/7003RFmmn4ScovlE1dectH?utm_source=generator" width="100%" height="600px" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="Chatarra Spotify New Releases"></iframe>
          </div>  
      </div> 
    </>
  )
}

export default SpotifyHome;