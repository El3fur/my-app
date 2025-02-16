export default function Header({ showLogout, onLogout, className }) {
    return (
        <header className={`${className} flex flex-col items-center space-y-2 py-4`}>
            {/* Заголовок */}
            <h1 className="text-2xl font-bold">Сайт информации о колледже</h1>

            {/* Контейнер для кнопок */}
            <div className="flex justify-between w-full px-4">
                {/* Кнопка "Главное меню" (слева) */}
                <nav>
                    <a
                        href="/"
                        className="px-3 py-1 bg-gray-700 text-white text-sm rounded-lg shadow-md hover:bg-gray-600 transition-all"
                    >
                        Главное меню
                    </a>
                </nav>

                {/* Кнопка "Выйти" (справа, только если showLogout=true) */}
                {showLogout && (
                    <button
                        onClick={onLogout}
                        className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg shadow-md hover:bg-red-600 transition-all"
                    >
                        Выйти
                    </button>
                )}
            </div>
        </header>
    );
}