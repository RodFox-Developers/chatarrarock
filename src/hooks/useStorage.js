import { useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, onSnapshot, doc, updateDoc, getDoc  } from "firebase/firestore";
import { storage, db } from "../firebase/config";

const useStorage = () => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState();
  const [url, setUrl] = useState();
  const [data, setData] = useState();

  const collectionRef = collection(db, "data");

/*  useEffect(() => {

      const getData = async () => {
        const docRef = doc(db, "data", "home-banner");
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          console.log('docSnap: ' + docSnap.data());      
        } else {      
          console.log("No such document!");
        }
      }
      getData();
       const unsub = onSnapshot(doc(db, "data", "homeBanner"), (doc) => {
        const docData = [];
        doc.forEach((d) => {
          docData.push(d.data());
        })
        setData(doc.data());    
        return () => unsub();
      }); 

  }, [])*/


  const startUpload = (file, fileName, textInput) => {
    if (!file) {
      return;
    }

    const storageRef = ref(storage, `images/${fileName}.jpg`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setUrl(downloadURL);
        
        try {
          if (textInput) {
            const dataRef = doc(collectionRef, fileName);
            await updateDoc(dataRef, {
              textInput: textInput,
            })
          }
        } catch (err) {
          setError(err);
        }

      }
    );
  };

  return { progress, url, error, startUpload };
};

export default useStorage;
