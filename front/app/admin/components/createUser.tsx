import React from "react";

export default function CreateUser() {
  return (
    <div className="w-full mx-auto bg-Five drop-shadow-2xl p-5 h-auto">
      <div className="w-full text-center text-2xl text-Main font-bold h-auto">
        Создать пользователя
      </div>
      <form className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 ">
          <div className="border p-5 grid grid-cols-1 space-y-5">
            <h1 className="text-Fourth font-bold text-xl">ФИО</h1>
            <div className="grid  items-center text-xl">
              <label className="">Имя</label>
              <input
                className="lg:col-span-3 border p-2 border-Main focus:border-Main"
                required
              ></input>
            </div>
            <div className="grid  items-center text-xl">
              <label className="">Фамилия</label>
              <input
                className="lg:col-span-3 border p-2 border-Main focus:border-Main"
                required
              ></input>
            </div>
            <div className="grid  items-center text-xl">
              <label className="">Отчество</label>
              <input
                className="lg:col-span-3 border p-2 border-Main focus:border-Main"
                required
              ></input>
            </div>
          </div>
          <div className="border p-5 grid grid-cols-1 space-y-5">
            <h1 className="text-Fourth font-bold text-xl">Контакты</h1>
            <div className="grid  items-center text-xl">
              <label className="">Номер телефона</label>
              <input
                className="lg:col-span-3 border p-2 border-Main focus:border-Main"
                required
              ></input>
            </div>
            <div className="grid  items-center text-xl">
              <label className="">Почта</label>
              <input
                className="lg:col-span-3 border p-2 border-Main focus:border-Main"
                required
              ></input>
            </div>
            <div className="grid  items-center text-xl">
              <label className="">Адрес</label>
              <input
                className="lg:col-span-3 border p-2 border-Main focus:border-Main"
                required
              ></input>
            </div>
          </div>
        </div>


        <button className="w-full bg-Main text-Five p-5 mt-5">
          Создать
        </button>
      </form>
    </div>
  );
}
