import { useLoaderData } from "react-router-dom";
import Videos from "../components/Videos";

function VideosPage() {
  const videosData = useLoaderData();
  return (
    <Videos videosData={videosData} />
  )
}

export default VideosPage;

export async function loader() {
  const response = await fetch('https://chatarra-c89b9.firebaseio.com/videos.json');
  if(!response.ok) {
    return;
  } else {
    const resData = await response.json();
    return resData;
  }
}