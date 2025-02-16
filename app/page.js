"use client";

import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../styles/globals.css';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Switch from '../components/Switch';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LOGIN_CREDENTIALS = {
  username: 'Admin',
  password: 'pswrd'
};

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      router.push('/main');
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === LOGIN_CREDENTIALS.username && password === LOGIN_CREDENTIALS.password) {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/main');
    } else {
      alert('Неверные учетные данные!');
    }
  };

  return (
      <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-violet-600 to-gray-800 text-white font-sans">
        <Head>
          <title>Next.js Premium Web App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" />
        </Head>

        <Header showLogout={false} className="shadow-lg bg-gradient-to-r from-gray-900 to-violet-600 py-6 px-12 text-white text-2xl font-bold uppercase tracking-wide" />

        <main className="flex flex-col items-center justify-center flex-grow p-12 bg-gray-900 rounded-lg shadow-xl max-w-3xl mx-auto border border-gray-700 fade-in">
          <h1 className="text-5xl font-extrabold text-violet-600 mb-8 drop-shadow-lg">Авторизация</h1>
          <p className="text-gray-300 mb-8 text-xl text-center leading-relaxed">Введите логин и пароль</p>

          <form onSubmit={handleLogin} className="w-full max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-300">Логин:</label>
              <input
                  type="text"
                  placeholder="Введите логин"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Пароль:</label>
              <input
                  type="password"
                  placeholder="Введите пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button type="submit" className="w-full bg-violet-600 py-3 rounded-lg text-white font-bold hover:bg-violet-600">
              Войти
            </button>
          </form>
        </main>

        <Footer className="mt-12 bg-gradient-to-r from-gray-900 to-violet-600 text-white py-6 text-center text-lg shadow-xl" />
      </div>
  );
}