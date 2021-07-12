import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Fa from "react-icons/fa";
import * as Fc from "react-icons/fc";
import * as Ai from "react-icons/ai";
import { signupIll } from "assets";
import { Button, MessageBox } from "parts";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "store/actions/UserActions";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegister = useSelector((state) => state.userSignup);
  const { loading, error, userInfo } = userRegister;

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Minimum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(signup(values))
      Swal.fire("Success", userInfo.message, "success!")
    }
  });

  return (
    <div className="grid grid-rows-signup min-h-screen">
      <header className="my-10 m-auto">
        <img
          src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/581fca3a.png"
          alt=""
        />
      </header>
      <main className="flex justify-between">
        <div className="flex flex-col items-center text-gray-700">
          <img src={signupIll} alt="tokopedia" className="w-6/12" />
          <h1 className="text-2xl font-bold">
            Jual Beli Mudah Hanya di Tokopedia
          </h1>
          <p>Gabung dan rasakan kemudahan bertransaksi</p>
        </div>
        <div className="flex flex-col items-center shadow rounded-xl p-10 mx-10 border ">
          <h1 className="text-3xl font-semibold">Daftar Sekarang</h1>
          <h4 className="mt-5">
            Sudah punya akun Tokopedia?{" "}
            <Link to="/signin">
              <span className="text-primary">Masuk</span>
            </Link>
          </h4>
          <div className="flex justify-around mt-5">
            <div className="flex items-center shadow p-3 rounded">
              <Fa.FaFacebookF className="text-facebook" />
              &nbsp;Facebook
            </div>
            &emsp;
            <div className="flex items-center shadow p-3 rounded">
              <Fc.FcGoogle />
              &nbsp;Google
            </div>
          </div>
          <p className="my-10 font-semibold text-xl">atau daftar dengan</p>
          {/* <form>
            <div className="text-gray-800 cursor-pointer hover:ring-primary">
              <label className="mb-1">Nomor HP atau Ema`  il</label>
              <input
                type="text"
                placeholder="Masukkan no.telephone atau email anda"
              />
              <small className="text-sm text-gray-400">
                Contoh: email@tokopedia.com
              </small>
            </div>
            <Button
              type="button"
              outerClassName="bg-primary w-full py-3 text-xl text-white font-bold mt-5"
            >
              DAFTAR
            </Button>
          </form> */}
          {error ? (
            <MessageBox variant="danger" outerClassName="w-full">
              {error}
            </MessageBox>
          ) : null}
          <form className="mt-8">
            <div>
              <label className="font-medium">Nama</label>
              <input
                className="input"
                type="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama"
                required
              />
            </div>
            <div className="mt-5">
              <label className="font-medium">Email</label>
              <input
                className="input"
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
              <div className="flex items-center">
                <input
                  className="input"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan Kata Sandi"
                />
                {!showPassword ? (
                  <Ai.AiFillEye
                    onClick={(e) => setShowPassword(true)}
                    className="absolute right-24"
                  />
                ) : (
                  <Ai.AiFillEyeInvisible
                    onClick={(e) => setShowPassword(false)}
                    className="absolute right-24"
                  />
                )}
              </div>
            </div>
            <div className="mt-5">
              <label className="font-medium">Konfirmasi Kata Sandi</label>
              <div className="flex items-center">
                <input
                  className="input"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Masukkan Kata Sandi"
                />
                {!showPassword ? (
                  <Ai.AiFillEye
                    onClick={(e) => setShowConfirmPassword(true)}
                    className="absolute right-24"
                  />
                ) : (
                  <Ai.AiFillEyeInvisible
                    onClick={(e) => setShowConfirmPassword(false)}
                    className="absolute right-24"
                  />
                )}
              </div>
            </div>
            <Button
              className="my-5 w-full bg-primary py-2 rounded text-white text-xl"
              type="submit"
              // onSubmit={submitHandler}
            >
              Daftar
            </Button>
          </form>
          <p className="text-center mt-5">Dengan mendaftar, saya menyetujui</p>
          <p className="text-center">
            Syarat dan Ketentuan serta Kebijakan Privasi
          </p>
        </div>
      </main>
      <footer className="text-center text-gray-500 mt-16">
        <span>&copy; 2009-2021, PT Tokopedia</span> Tokopedia Care
      </footer>
    </div>
  );
};

export default SignupScreen;
