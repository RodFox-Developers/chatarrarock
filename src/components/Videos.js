import React from "react";

const Videos = (props) => { 
  return (
    <section id="videoclips" className="bg-paper03 py-5">
      {
        Object.values(props).map(x => x.map(video => {                   
          return (
            <div className="row my-5 justify-content-center">
            <div className="col-lg-6">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="Videos Chatarra Rock"
                  className="embed-responsive-item"
                  width="100%"
                  height="450"
                  src={video.youtube}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          )
        }).reverse())
      }
    </section>
  );
};

export default Videos;
