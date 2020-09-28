import React ,{useState}from 'react';
// import logo from './logo.svg';


function App() {

const [values, setValues] = useState({   // form values state
  firstName : "",
  lastName : "",
  email : ""
 })
const [submitted, setSubmitted]= useState(false) // form submitted state
const [valid, setValid] = useState(false) // values valid state

const handleFirstNameChange = (event)=>{
  setValues({...values, firstName: event.target.value})
}

const handleLastNameChange = (event)=>{
  setValues({...values,lastName : event.target.value})
}

const handleEmailChange = (event)=>{
  setValues({...values,email:event.target.value})
}

const handleSubmit = (event) =>{
  event.preventDefault()
  if(values.firstName && values.lastName && values.email){
    setValid(true)
  }
  setSubmitted(true)
}
  return (
    <div className="form-container">
      <form className="register-form" onSubmit = {handleSubmit}>
        {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null}
          <input 
            onChange = {handleFirstNameChange}
            value = {values.firstName}
            className="form-field"
            placeholder="First Name"
            name="firstName"
          />
          {submitted && !values.firstName ? <span>Please enter the first name</span> : null}
          <input 
            onChange = {handleLastNameChange}
            value = {values.lastName}
            className="form-field"
            placeholder="Last Name"
            name="lastName"
          />
          {submitted && !values.lastName ? <span>Please enter the last name</span> : null}
          <input 
            onChange = {handleEmailChange}
            value = {values.email}
            type="email"
            className="form-field"
            placeholder="Email"
            name="email"
          />
          {submitted && !values.email ? <span>Please enter the email</span> : null}
          <button class="form-field" type="submit">
            Register
          </button>
      </form>
    </div>
  );
}

export default App;
