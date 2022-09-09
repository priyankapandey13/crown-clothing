import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div>
      {/* <h1>Signin Page</h1>
      <button onClick={logGoogleUser}>Signin With Google</button> */}
    <div className='authentication-container'>
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </div>
    </div>
  );
};
export default Authentication;
