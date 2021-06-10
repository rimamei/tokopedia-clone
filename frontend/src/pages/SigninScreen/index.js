import { Button, Loading, MessageBox } from "parts";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signin } from "store/actions/UserActions";

const SigninScreen = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, redirect, history]);

  return (
    <>
    {loading && <Loading>Processing...</Loading>}
    {error && <MessageBox variant="danger">{error}</MessageBox>}
    <div className="w-1/3 m-auto shadow-md border rounded-xl p-10 mt-40 mb-12 bg-white">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Masuk</h1>
        <Link to="/signup">
          <h4 className="text-primary">Daftar</h4>
        </Link>
      </div>
      <form className="mt-8" onSubmit={submitHandler}>
        <div>
          <label className="font-medium">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan Email"
            required
          />
          <small className="text-sm text-gray-400">
            Contoh: email@tokopedia.com
          </small>
        </div>
        <div className="mt-5">
          <label className="font-medium">Kata Sandi</label>
          <div>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan Kata Sandi"
            />
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div className="flex items-center text-gray-700">
            <input
              type="checkbox"
              className="h-5 w-5 form-checkbox text-primary"
            />
            &nbsp;Ingat saya
          </div>
          <p className="text-primary">Lupa Kata Sandi?</p>
        </div>
        <Button
          className="my-5 w-full bg-primary py-2 rounded text-white text-xl"
          type="submit"
        >
          Masuk
        </Button>
      </form>
      <h4 className="font-semibold text-lg text-center my-5">
        atau masuk dengan
      </h4>
      <Button type="button" outerClassName="w-full mt-5 py-2 shadow">
        Google atau Facebook
      </Button>
      <p className="mt-3 text-center">
        Belum punya akun Tokopedia?{" "}
        <span className="text-primary">
          <Link to="/signup">Daftar</Link>
        </span>
      </p>
    </div>
    </>
  );
};

export default SigninScreen;
