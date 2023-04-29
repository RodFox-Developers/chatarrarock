function SpotifyHome() {
  return (
    <>
      <div class="row">
          <div class="col-lg-12 my-5 text-center">
              <img src="https://firebasestorage.googleapis.com/v0/b/chatarra-c89b9.appspot.com/o/images%2Fimg-logo-estrella-sm.png?alt=media&token=f8d510db-2b79-496b-b7dd-77c6244f6d08" alt="estrella chatarra" class="img-fluid estrella"></img>
              <h3 class="d-inline mx-4">Nuestros últimos trabajos</h3>
              <img src="https://firebasestorage.googleapis.com/v0/b/chatarra-c89b9.appspot.com/o/images%2Fimg-logo-estrella-sm.png?alt=media&token=f8d510db-2b79-496b-b7dd-77c6244f6d08" alt="estrella chatarra" class="img-fluid estrella"></img>
          </div>
      </div>
      <div class="row justify-content-center my-5">
          <div class="col-lg-6">
              <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/playlist/7003RFmmn4ScovlE1dectH?utm_source=generator" width="100%" height="600px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="Chatarra Spotify New Releases"></iframe>
          </div>  
      </div> 
    </>
  )
}

export default SpotifyHome;