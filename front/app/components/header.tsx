"use client"
import React, { useState } from 'react'

export default function HEADER() {
   const openModal = (e: any) => {
      let modal: any = document.getElementById("drawer-navigation");
      if(modal.classList.contains("-transform-none")){
         modal.classList.toggle("-translate-x-full")
      }
   }

  return (
<div>
      
<div className="fixed w-full top-0 left-0 p-4">
   <button onClick={e => openModal(e)} className="text-white bg-Second hover:bg-Main duration-150 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 " type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
   Открыть меню
   </button>
</div>
<div id="drawer-navigation" className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -transform-none -translate-x-full bg-Five "  aria-labelledby="drawer-navigation-label">
    <h5 id="drawer-navigation-label" className="text-base font-semibold text-Fourth uppercase ">Меню</h5>
    <button onClick={e => openModal(e)} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-Second bg-transparent hover:bg-Second duration-150 hover:text-Five rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center" >
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span className="sr-only">Close menu</span>
    </button>
  <div className="py-4 overflow-y-auto">
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" className="flex items-center p-2 text-Fourth rounded-lg  hover:bg-Third ">
               <svg aria-hidden="true" className="w-6 h-6 text-Fourth transition duration-75  group-hover:text-Fourth " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span className="ml-3">Задачи</span>
            </a>
         </li>
         <li>
            <button type="button" className="flex items-center w-full p-2 text-Fourth transition duration-75 rounded-lg group hover:bg-Third" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-Fourth transition duration-75 group-hover:text-Fourth" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Смены</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                  <li>
                     <a href="#" className="flex items-center w-full p-2 text-Fourth transition duration-75 rounded-lg pl-11 group hover:bg-Third ">Products</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center w-full p-2 text-Fourth transition duration-75 rounded-lg pl-11 group hover:bg-Third ">Billing</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center w-full p-2 text-Fourth transition duration-75 rounded-lg pl-11 group hover:bg-Third ">Invoice</a>
                  </li>
            </ul>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-Fourth rounded-lg hover:bg-Third ">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-Fourth transition duration-75 group-hover:text-Fourth " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Профиль</span>
               <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-Third rounded-full  ">Pro</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-Fourth rounded-lg hover:bg-Third ">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-Fourth transition duration-75  group-hover:text-Fourth" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Сообщения</span>
               <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-Five bg-Second rounded-full">3</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-Fourth rounded-lg  hover:bg-Third ">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-Fourth transition duration-75  group-hover:text-Fourth" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Пользователи</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-Fourth rounded-lg  hover:bg-Third">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-Fourth transition duration-75 group-hover:text-Fourth " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">О компании</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-Fourth rounded-lg  hover:bg-Third ">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-Fourth transition duration-75  group-hover:text-Fourth" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Выйти</span>
            </a>
         </li>
      </ul>
   </div>
</div>

    </div>
  )
}
