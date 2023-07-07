import React from 'react'

export default function CreateUser() {
  return (
    <div>
        <div>Создать пользователя</div>
        <form>
            <div className=''>
            <label>Имя</label>
            <input></input>
            </div>
            <div className=''>
            <label>Фамилия</label>
            <input></input>
            </div>
            <div className=''>
            <label>Отчество</label>
            <input></input>
            </div>
            <div className=''>
            <label>Номер телефона</label>
            <input></input>
            </div>
            <div className=''>
            <label>Логин</label>
            <input></input>
            </div>
            <div className=''>
            <label>Пароль</label>
            <input></input>
            </div>
            <div className=''>
            <label>Дивизия</label>
            <input></input>
            </div>
            <div className=''>
            <label>Отпуск</label>
            <input></input>
            </div>
            <div className=''>
            <label>Руководитель</label>
            <input></input>
            </div>
            <button>Создать</button>
        </form>
    </div>
  )
}
