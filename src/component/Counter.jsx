// Импортируем React и хук useState из библиотеки React
import React, { useState } from "react";

// Определяем функциональный компонент Counter
const Counter = () => {
	// Объявляем состояние count с начальным значением 0 и функцию setCount для его обновления
	const [count, setCount] = useState(0);

	// Определяем функцию handleClick, которая увеличивает значение count на 1 при каждом вызове
	const handleClick = () => {
		setCount(count + 1);
	};

	// Возвращаем JSX, содержащий кнопку
	// Кнопка отображает текущее значение count и вызывает handleClick при нажатии
	return <button onClick={handleClick}>{count}</button>;
};

// Экспортируем компонент Counter по умолчанию, чтобы его можно было использовать в других файлах
export default Counter;

//Комментарии для понимания)
дждэж;
