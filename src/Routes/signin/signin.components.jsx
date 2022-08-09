import { signInWithgooglepopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils.js";

const Signin=()=>{
    const logGoogleUser = async()=>{
        const {user} = await signInWithgooglepopup();
        createUserDocumentFromAuth(user)
        // console.log(respons);
    }
    return(
        <div>
        <h1>hello signin</h1>
        <button onClick={logGoogleUser}>Signin With Google</button>
        </div>
    )
}
export default Signin;