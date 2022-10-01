import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Home() {
  return (
    <div>
      <h1>Nyumbani</h1>
    </div>
  );
}

function About (){
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  )
}

function Login() {
  return (
    <div>
        <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
      
    </div>
  )
}

function NavBar () {
  return(
   <div>
      <NavLink to= "/" exact style = {linkStyles} activeStyle = {{background: "green"}}>Home</NavLink>
      <NavLink to = "about" exact style ={linkStyles}activeStyle = {{background: "green"}} >About</NavLink>
      <NavLink to="/login" exact style={linkStyles} activeStyle={{background: "darkblue",}}>Login</NavLink>
   </div>
  )
}

// function App() {
//   return <Home />;
// }

ReactDOM.render(
<BrowserRouter>
<NavBar />
<Routes>
  <Route path="/" element = {<Home/>}/>
  <Route path="about" element = {< About/>}/>
  <Route  path="login" element ={<Login/>}/>
</Routes>
<NavBar />

</BrowserRouter>,
document.getElementById('root')
);