import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { login } from "../redux/apiCalls";

function Admin() {
  const user = useSelector((state) => state.user.currentUser);
  const navigateTo = useNavigate();

  useEffect(()=>{
    if (user) {
      console.log("User signed in already");
      navigateTo("/")
    }
  }, [user]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, {email, password});
  };

  return (
    <>
      <div className='login-container'>
        <h2>Login</h2>
        <form className="login">
            <label for="email">Email: </label>
            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} /><br/>
            <label for="password">Password: </label>
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} /><br/>
            <button onClick={handleLogin} disabled={isFetching}>Login</button><br/>
            {error && <span style={{color:'red'}}>Something went wrong...</span>}
        </form>
      </div>
    </>
  );
}

export default Admin