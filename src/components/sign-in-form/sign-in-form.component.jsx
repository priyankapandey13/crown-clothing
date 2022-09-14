import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {signInWithgooglepopup, createUserDocumentFromAuth, SignInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils.js";
import "./sign-in-form.styles.scss";
import { useState } from "react";


const defaultFormFields = {
    email: ``,
    password: ``,
  };


const SignInForm = ()=>{

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
      };

      const signInWithGoogle = async () => {
          const { user } = await signInWithgooglepopup();
          await createUserDocumentFromAuth(user);
        };
        
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await SignInAuthUserWithEmailAndPassword(email, password);
                alert('Hurrey, You are logged in');
                resetFormFields();
                console.log(response);
                
            } catch (error) {
                switch (error.code) {
                    case 'auth/wrong-password':
                        alert('incorrect password for email');
                        break;

                    case 'auth/user-not-found':
                        alert('no user associated with this email');
                        break;

                    default:
                        console.log(error);
                }
            }
        }


        const handleChange = async (e) => {
            e.preventDefault();
            const {name, value} = e.target;
            setFormFields({...formFields, [name]: value});
            console.log(formFields);
        };
                
    return(
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sin in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                label="Email"
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
               />

                <FormInput
                label="Password"
                type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
                />
                <div className="buttons-container">
            <Button  type='Submit' >Signin</Button>
            {/* <Button buttonType='google' onClick={logGoogleUser}>Signin With Google</Button> */}
            <Button type="button" buttonType='google' onClick={signInWithGoogle} >Signin With Google</Button>
            </div>
                </form>
        </div>
    )
}
export default SignInForm;