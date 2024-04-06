
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";


const Login = () => {
  const {signInUser,signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);

    signInUser(email,password)
    .then(result =>{
      console.log(result.user);
      e.target.reset();
      navigate('/')
    })

    .catch(error =>{
      console.error(error);
    })

  }

  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(result =>{
      console.log(result.user);
    })
    .catch(error =>{
      console.error(error);
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
      
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" required className="input input-bordered"/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" required className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-xl text-center mb-8">New here? Please <Link to='/register'><button className="btn border-2 border-green-600 text-xl font-semibold">Register</button></Link></p>

          <p className="text-center mb-6">
            <button onClick={handleGoogleSignIn} className="btn border-2 border-green-600 text-xl font-semibold">Google</button>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Login;