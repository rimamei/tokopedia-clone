import React from "react";
import * as Fa from "react-icons/fa";
import * as Fc from "react-icons/fc";
import { signup } from "assets";
import { Button } from "parts";

const SignUp = () => {
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
          <img src={signup} alt="tokopedia" className="w-6/12" />
          <h1 className="text-2xl font-bold">
            Jual Beli Mudah Hanya di Tokopedia
          </h1>
          <p>Gabung dan rasakan kemudahan bertransaksi</p>
        </div>
        <div className="flex flex-col items-center shadow rounded-xl p-10 mx-10">
          <h1 className="text-3xl font-semibold">Daftar Sekarang</h1>
          <h4 className="mt-5">
            Sudah punya akun Tokopedia?{" "}
            <span className="text-primary">Masuk</span>
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
          <form>
            <div className="text-gray-800 cursor-pointer hover:ring-primary">
              <label className="mb-1">Nomor HP atau Email</label>
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

export default SignUp;
