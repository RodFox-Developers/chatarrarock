import { useLoaderData } from "react-router-dom";
import Discografia from "../components/Discografia";

function DiscografiaPage() {

  const discografia = useLoaderData();

  return (
    <Discografia discografia={discografia} />
  )
}
export default DiscografiaPage;

export async function loader() {
  const response = await fetch('https://chatarra-c89b9.firebaseio.com/albumes.json');
  if(!response.ok) {
    return;
  } else {
    const resData = await response.json();
    return resData;
  }
}