import {
  signInWithgooglepopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithgooglepopup();
    const userdocRef = await createUserDocumentFromAuth(user);
    // console.log(respons);
  };
  return (
    <div>
      <h1>Signin Page</h1>
      <button onClick={logGoogleUser}>Signin With Google</button>
      <SignUpForm></SignUpForm>
    </div>
  );
};
export default Signin;
