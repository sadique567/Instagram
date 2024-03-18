import React from "react";
import Login from "./Components/Login";
import "./Styles/App.css"
import Register from "./Components/Register";
import HomePage from "./Components/Home/HomePage";
import Profile from "./Components/Profile/Profile";
function App() {
  return (
    <div className="App">
      {/* <div style={{height:'100vh' , display:'flex', alignItems:'center'}}>
        <Login/>
      </div> */}
    

    <div style={{height:'100vh' , display:'flex', alignItems:'center'}}>
     <Register/> 
     </div>

{/* <HomePage/> */}

{/* <Profile/> */}
    </div>
  );
}

export default App;
