import { Outlet, Link } from "react-router-dom";

function Admin() {

  return (
    <>
      <div className='login-container'>
        <form className="login" action="http://localhost:5000/api/auth/login" method="POST">
            <input type="email" name="email" />
            <input type="password" name="password" />
            <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default Admin