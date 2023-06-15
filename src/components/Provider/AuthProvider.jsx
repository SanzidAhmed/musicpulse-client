import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser =(email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        setLoading(true)
        signOut(auth)
    }
    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
              setUser(currentUser);

            //   get and set token
            if(currentUser){
                axios.post('http://localhost:3500/jwt', {email: currentUser.email})
                .then(data => {
                    localStorage.setItem('access_token', data.data.token);
                    axios.get(`http://localhost:3500/users/${currentUser.email}`)
                    .then(data => {
                        console.log(data.data);
                        setUser({...currentUser, ...data.data});
                    })
                })
            }
            else{
                localStorage.removeItem('access_token');
            }
              setLoading(false)
          })
          return () => {
              return unsubscribe();
          }
      },[])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signInUser,
        signOutUser,
        signInGoogle,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;