import { useState } from "react";
import {
  CreateAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // console.log(formFields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hi i reached here");
    //see if  passwords matches
    if (password !== confirmPassword) {
      alert("Your password does not match please try again");
      setFormFields({ confirmPassword: "" });
      return;
    }

    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };
    // see if we have authenticated that user with email and password
    try {
      const { user } = await CreateAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("User already exists with this email id");
      } else {
        console.log("User creation encountered an error", error);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Signup with your email and password</span>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <FormInput
          label="DisplayName"
            type= "text"
            required
            onChange= {handleChange}
            name= "displayName"
            value= {displayName}
        />

        <FormInput
          label="Email"
            type= "email"
            required
            onChange= {handleChange}
            name= "email"
            value= {email}
        />

        <FormInput
          label="Password"
            type={password}
            required
            onChange= {handleChange}
            name= "password"
            value= {password}
        />

        <FormInput
          label="Confirm Password"
            type= "password"
            required
            onChange= {handleChange}
            name= "confirmPassword"
            value= {confirmPassword}
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
