
import { useState } from 'react';
import InputField from './InputField';  
import Button from './Button';  

export default function AuthForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Логин:', username);
    console.log('Пароль:', password);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto mt-4 p-4 border rounded shadow-md">
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700">Логин:</label>
        <InputField
          placeholder="Введите логин"
          bgColor="bg-white"
          textColor="text-black"
          onChange={setUsername}
          className="w-full mt-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">Пароль:</label>
        <InputField
          placeholder="Введите пароль"
          bgColor="bg-white"
          textColor="text-black"
          onChange={setPassword}
          type="password"
          className="w-full mt-2"
        />
      </div>
      <Button
        text="Войти"
        bgColor="blue-500"
        textColor="white"
        onClick={handleSubmit}
        className="w-full mt-4"
      />
    </form>
  );
}

