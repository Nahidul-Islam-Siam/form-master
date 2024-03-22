import "./App.css";
import ReusableForm from "./Components/ReusableForm/ReusableForm";
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import StateFullForm from './Components/StateFullForm/StateFullForm'
// import SimpleForm from './Components/simpleForm/SimpleForm'

function App() {
  const handleSignUpSubmit = data => {
    console.log('sign up data', data);
  };

  const handleUpdateprofile = data => {
    console.log('update profile', data);
  };

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={"Sign Up"}
       handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>please sign up right now</p>
        </div>
        {" "}
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        submitBtnText="Update"
        handleSubmit={handleUpdateprofile }
        
      >
        <div>
          <h2>Update Profile</h2>
          <p>Alaways keep your profile updated</p>
        </div>
      </ReusableForm>
    </>
  );
}

export default App;
