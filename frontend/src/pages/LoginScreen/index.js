import { Button } from "parts";
import React from "react";

const LoginScreen = () => {
  return (
    <div className="w-1/3 m-auto shadow-md border rounded-xl p-10 mt-5 bg-white">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Masuk</h1>
        <h4 className="text-primary">Daftar</h4>
      </div>
      <form className="mt-8">
        <div>
          <label className="font-medium">Email</label>
          <input type="text" placeholder="Masukkan Email" />
          <small className="text-sm text-gray-400">Contoh: email@tokopedia.com</small>
        </div>
        <div className="mt-5">
          <label className="font-medium">Kata Sandi</label>
          <div>
            <input type="password" placeholder="Masukkan Kata Sandi" />
          </div>
        </div>
        <div className="flex justify-between mt-5">
        <div className="flex items-center text-gray-700">
            <input type="checkbox" className="h-5 w-5 form-checkbox text-primary" />
            &nbsp;Ingat saya
        </div>
        <p className="text-primary">Lupa Kata Sandi?</p>
        </div>
        <Button className="my-5 w-full bg-primary py-2 rounded text-white text-xl">Masuk</Button>
      </form>
      <h4 className="font-semibold text-lg text-center my-5">atau masuk dengan</h4>
      <Button outerClassName="w-full mt-5 py-2 shadow">Google atau Facebook</Button>
      <p className="mt-3 text-center">
        Belum punya akun Tokopedia? <span className="text-primary">Daftar</span>
      </p>
    </div>
  );
};

export default LoginScreen;
