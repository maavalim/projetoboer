import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth";
import { useState,useEffect} from "react";
 
export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [cancelled, setCancelled] = useState(false);
    const auth = getAuth()
 
    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }
    }
    const createUser = async (data) => {
        checkIfIsCancelled()
        setLoading(true)
 
        try {
            const {user} = await createUserWithEmailAndPassword(
                auth, data.email, data.password
            )
 
            await updateProfile(user, {
                displayName: data.displayName
            })
            return user
        }
        catch (error) {
 
        }
        setLoading(false);
      useEffect(() => {
        return() =>setCancelled(true);
      },{});

      return {
        auth,
        createUser,
        loading,
        error,

        
      }
    }
 