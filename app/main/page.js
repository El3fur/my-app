"use client";

import Head from 'next/head';
import { useRouter } from 'next/navigation';
import '../../styles/globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import Switch from '../../components/Switch';
import Image from 'next/image';
import { useState } from 'react';

export default function MainPage() {
    const router = useRouter();
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        router.push('/');
    };

    const handleThemeChange = (checked) => {
        setIsDarkMode(checked);
    };

    return (
        <div className={`min-h-screen flex flex-col justify-between ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900'} font-sans`}>
            <Head>
                <title>История Колледжа</title>
            </Head>

            <Header showLogout={true} onLogout={handleLogout} className={`shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-gray-900 to-blue-900'} py-6 px-12 text-white text-2xl font-bold uppercase tracking-wide`} />

            <main className={`flex flex-col items-center justify-center flex-grow p-12 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl max-w-4xl mx-auto border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} fade-in`}>
                <h1 className="text-4xl font-extrabold mb-6">История нашего колледжа</h1>
                <p className="text-lg text-align leading-relaxed mb-8">
                    Приказом Высшего Совета народного хозяйства СССР от 25 сентября 1929 г. №1276 образован и передан в подчинение Народного комиссариата тяжелой промышленности
                    Новосибирский машиностроительный техникум, который разместился в здании школы ФЗУ на станции Кривощёково.
                    Свою деятельность техникум начал 15 ноября 1929 г.
                    Так начинается история Государственного бюджетного профессионального образовательного учреждения
                    Новосибирской области «Новосибирский авиационный технический колледж имени Б.С. Галущака»...
                </p>

                <Image
                    src="/college-photo.jpg"
                    alt="Фото колледжа"
                    width={1920}
                    height={1080}
                    className="rounded-lg shadow-lg w-full max-w-6xl mb-8 object-cover"
                />

                <div className="w-full max-w-md space-y-4">
                    <InputField
                        placeholder="Введите ваш комментарий"
                        bgColor="bg-gray-200"
                        textColor="black"
                        onChange={(val) => console.log(val)}
                    />

                    <Switch
                        text="Тёмная тема"
                        bgColor={isDarkMode ? "gray-600" : "gray-300"}
                        textColor={isDarkMode ? "white" : "black"}
                        onChange={handleThemeChange}
                    />

                    <Button
                        text="Нажми меня"
                        bgColor="violet-600"
                        textColor="white"
                        onClick={() => alert('Кнопка нажата!')}
                    />
                </div>


            </main>

            <Footer className={`mt-12 ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-gray-900 to-violet-600'} text-white py-6 text-center text-lg shadow-xl`} />
        </div>
    );
}