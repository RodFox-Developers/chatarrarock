function BannerHome() {
  return (
    <section id="header">
        <div className="row justify-content-around align-items-center bg-blur">
            <div className="col-md-4 m-5">
                <img src="https://firebasestorage.googleapis.com/v0/b/chatarra-c89b9.appspot.com/o/images%2Fcovers-albums%2Fcover_rock_duro.jpg?alt=media&token=d6f37f57-1e26-43be-84e7-58c4df5bc94d" alt="Chatarra Rock Duro" className="img-fluid" />
            </div>
            <div className="col-md-4 text-center mb-5">            
                <a href="https://music.chatarrarock.com/rock-duro" role="button" className="btn btn-dark px-lg-5 py-lg-3 font-weight-bold" target="_blank" rel="noreferrer">Play Rock Duro</a>
            </div>
        </div> 
    </section>
  );
}

export default BannerHome;