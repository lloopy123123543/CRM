"use client"
import React, { useRef, useState } from "react";
import DIVISION from "./divisions";

export default function CreateUser() {
    let first_name = React.useRef<HTMLInputElement>(null)
    let second_name = React.useRef<HTMLInputElement>(null)
    let third_name = React.useRef<HTMLInputElement>(null)
    let phone_number = React.useRef<HTMLInputElement>(null)
    let email = React.useRef<HTMLInputElement>(null)
    let login = React.useRef<HTMLInputElement>(null)
    let password = React.useRef<HTMLInputElement>(null)
    let divison_id = React.useRef<HTMLInputElement>(null)
    let vacation_count = React.useRef<HTMLInputElement>(null)
    let upper_user_id = React.useRef<HTMLInputElement>(null)

    const select_division = (e: any) => {
        divison_id = e.target.value
    }
    const select_boss = (e: any) => {
        upper_user_id = e.target.value
    }
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
              <label  className="">Имя</label>
              <input
              ref = {first_name}
                className="lg:col-span-3 border p-2 border-Main focus:border-Main"
                required
              ></input>
            </div>
            <div className="grid  items-center text-xl">
              <label className="">Фамилия</label>
              <input
              ref = {second_name}
                className="lg:col-span-3 border p-2 border-Main focus:border-Main"
                required
              ></input>
            </div>
            <div className="grid  items-center text-xl">
              <label className="">Отчество</label>
              <input
                ref = {third_name}
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
                ref = {phone_number}
                className="lg:col-span-3 border p-2 border-Main focus:border-Main"
                required
              ></input>
            </div>
            <div className="grid  items-center text-xl">
              <label className="">Почта</label>
              <input
              ref = {email}
                className="lg:col-span-3 border p-2 border-Main focus:border-Main"
                required
              ></input>
            </div>
          </div>
          <div className="border p-5 grid grid-cols-1 space-y-5">
            <h1 className="text-Fourth font-bold text-xl">Авторизация</h1>
            <div className="grid  items-center text-xl">
              <label className="">Логин</label>
              <input
              ref = {login}
                className="lg:col-span-3 border p-2 border-Main focus:border-Main"
                required
              ></input>
            </div>
            <div className="grid  items-center text-xl">
              <label className="">Пароль</label>
              <input
              ref = {password}
                className="lg:col-span-3 border p-2 border-Main focus:border-Main"
                required
              ></input>
            </div>

          </div>
          <div className="border p-5 grid grid-cols-1 space-y-5">
            <h1 className="text-Fourth font-bold text-xl">Дополнительное</h1>
            <div className="grid  items-center text-xl">
              <label className="">Должность</label>
              <select
              onChange={e => {select_division(e)}}
                className="lg:col-span-3 border p-2 border-Main focus:border-Main"
                required
              >
                {DIVISION ? DIVISION.map(div => <option value={div.id} key={div.id}>{div.name}</option>): <div>Loading...</div>}
              </select>
            </div>
            <div className="grid  items-center text-xl">
              <label className="">Отпуск</label>
              <input
              ref = {vacation_count}
                className="lg:col-span-3 border p-2 border-Main focus:border-Main"
                required
              ></input>
            </div>
            <div className="grid  items-center text-xl">
              <label className="">Подчинение</label>
              <select
                     onChange={e => {select_boss(e)}}
                className="lg:col-span-3 border p-2 border-Main focus:border-Main"
                required
              >

              </select>
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
