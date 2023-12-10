/* import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "firebase/config";

const useFirestore = (props) => {
  const [docs, setDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try{
        const q = query(collection(db, props.collectionName), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const images = [];
          querySnapshot.forEach((doc) => {
            images.push(doc.data().name);
          });
          setDocs(images);
        });
      } catch(error) {
        console.log(error);
      }
    }
    getData();
  }, [props.collectionName])

  return { docs, isLoading };
};

export default useFirestore; */
