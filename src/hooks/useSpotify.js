import { useEffect, useState, useCallback } from "react";

const CLIENT_ID = "ccfff94d576a4fe69a7a034e3c76488d";
const CLIENT_SECRET = "dd4278c26cce411f811db2aa4efee310";

const useSpotify = () => {
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const getAccesssToken = useCallback(async () => {
    let authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Authorization': "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
      },
      body: "grant_type=client_credentials",
    };

    const response = await fetch(
      "https://accounts.spotify.com/api/token",
      authParameters
    ).catch((err) => {
      setError(err.message);
      setIsLoading(false);
    });
    if (response.ok) {
      const { access_token } = await response.json();
      return access_token;
    }
  }, []);
  useEffect(() => {
    setIsLoading(true);
    getAccesssToken().then((res) => setAccessToken(res));
  }, [getAccesssToken]);

  const getAlbums = useCallback(async () => {
    const response = await fetch(
      "https://api.spotify.com/v1/artists/7AtmpUfNKk9jraaAoOv9Da/albums?include_groups=album&market=ES&limit=50&offset=0",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    ).catch((err) => {
      setError(err.message);
      setIsLoading(false);
    });
    if (response.ok) {
      const { items } = await response.json();
      return items;
    }
  }, [accessToken]);
  useEffect(() => {
    if (accessToken !== "") {
      getAlbums().then((albums) => setAlbums(albums));
      setIsLoading(false);
    }
  }, [getAlbums, accessToken]);

  return { albums, isLoading, error };
};

export default useSpotify;
