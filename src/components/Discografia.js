import { useEffect, useState } from "react";
import LoadingSpinner from "./shared/LoadingSpinner";

function Discografia(props) {
  const [discografia, setDiscografia] = useState([]);
  
  useEffect(() => {       
    if (props.spotifyData.length > 0) {
      setDiscografia(props.spotifyData);      
    }    
  }, [props.spotifyData]);

  return (
    <>
      {props.isLoading ? (
        <LoadingSpinner />
      ) : (
        discografia.map((album) => (
          <div className="row justify-content-center my-5" key={Math.random() * 6}>
            <div className="col-md-8 col-lg-6">
              <iframe                
                title="Discografía Chatarra Rock"
                style={{ borderRadius: "12px" }}
                src={`https://open.spotify.com/embed/album/${album.id}`}
                width="100%"
                height="600px"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        ))
      )}      
    </>
  );
}

export default Discografia;
