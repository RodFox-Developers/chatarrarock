import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const useAuth = () => {
  const [authUser, setAuthUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      try {        
        if(user) {
          setAuthUser(user);
          unsubscribe();
        } else {
          setAuthUser(null);
        }        
      } catch (err) {
        console.log(err);
      }
    });
  }, [])

  return authUser;
};

export default useAuth;
