function VideoHome() {
  return (
    <div className="row my-5 justify-content-center">
        <div className="col-lg-6">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" width="100%" height="450" src="https://www.youtube.com/embed/Wk7JTPMrFLc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  title="Chatarra Youtube"></iframe>   
            </div>         
        </div>
    </div> 
  );
}

export default VideoHome;