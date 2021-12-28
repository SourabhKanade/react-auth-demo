import React, {useState} from 'react'
import './SignUp.css';

function SignUp() {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }
  
let formisvalid = false;

  if(enteredNameIsValid && enteredEmailIsValid){
    formisvalid = true;
   }

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  }

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredName('');
    setEnteredEmail('');
    if (!enteredNameIsValid) {
      return;
    }
    console.log([enteredName, enteredEmail]);
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  }
  
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <>
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Username</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && ( <p className='error-text'>Name must not be empty.</p> )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && ( <p className='error-text'>Name must not be empty.</p> )}
      </div>
      <div className='form-actions'>
      {/* <button >Submit</button> */}
      <button disabled={!formisvalid}>Submit</button>
      </div>
    </form>
    </>
  )
}

export default SignUp;
