import { useEffect, useState, useCallback } from "react";

const API_KEY = "AIzaSyASyzNTQOuLYXHJb7qJ9kViJVEFMY-Cbhc";

const useYoutube = () => {
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const getPlaylists = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLAOluicY5qPJmaNbIUgOEvygZd6zy-gVM&key=" +
        API_KEY,
      { method: "GET" }
    ).catch((err) => {
      setError(err.message);
      setIsLoading(false);
    });
    if (response.ok) {
      const { items } = await response.json();
      setIsLoading(false);
      return items;
    }
  }, []);
  useEffect(() => {
    getPlaylists().then((playlists) => setPlaylists(playlists));
  }, [getPlaylists]);
  return { playlists, isLoading, error };
};

export default useYoutube;
