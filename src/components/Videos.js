import { useEffect, useState } from "react";
import LoadingSpinner from "./shared/LoadingSpinner";

const Videos = (props) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (props.playlists.length > 0) {
      setVideos(props.playlists);
    }
  }, [props.playlists]);

  return (
    <>
      {props.isLoading ? (
        <LoadingSpinner />
      ) : (
        videos.map((video) => (
          <div className="row my-5 justify-content-center" key={Math.random() * 6}>
            <div className="col-lg-6">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe                  
                  title="Videos Chatarra Rock"
                  className="embed-responsive-item"
                  width="100%"
                  height="450"
                  src={`https://www.youtube-nocookie.com/embed/${video.snippet.resourceId.videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Videos;
