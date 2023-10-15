// import React from 'react';

import { Link } from "react-router-dom";

const Signup = () => {
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.displayName.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name,photo,email,password,confirmPassword);

    }
    return (
        <div className="hero  bg-base-200">
            <div>
                <h3 className="text-center text-2xl font-bold">Please Register</h3>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-3">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="displayName" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">ConfirmPassword</span>
                                </label>
                                <input type="confirmPassword" name="confirmPassword" placeholder="confirm password" className="input input-bordered" required />
                            </div>

                        </div>
                        <div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">
                                <Link to='/login'>
                                    Already Have An Account
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">
                                <input type="submit" value="Login" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;