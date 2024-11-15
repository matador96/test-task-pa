Код необходимо отправить в ваш личный аккаунт на GitHub в виде публичного проекта. Пожалуйста, не забудьте прислать ссылку на выполненное задание. Если вам нужно добавить дополнительные инструкции о вашем проекте, включите их в файл README.md.

На странице должны быть поля для ввода логина. Домашняя страница должна содержать левое меню и основную секцию контента. Она должна открываться после входа в систему.
В левом меню должны быть три раздела: Университеты, Школы и Старшие школы, и контент, соответствующий выбранному маршруту, должен отображаться справа.

Над контентной частью должен быть фильтр, реализованный так, чтобы он мог быть использован на 30 страницах в будущем.

Фильтры должны включать в себя select-поля, числовые, текстовые и дата-инпуты, а также отдельную кнопку для очистки фильтров.
При выборе, вводе или изменении значений фильтров должен отправляться запрос на сервер.

На странице университетов в таблице должен быть столбец «Корпус». В каждой строке этого столбца должна быть кнопка-глаз, при нажатии на которую будет открываться модальное окно со списком корпусов данного университета.

При удалении элемента Университет, Школа или Старшая школа на каждой странице должно открываться окно подтверждения, написанное в виде кастомного компонента.

Для симуляции работы с бэкендом вы можете использовать любые mock API сервисы.
На разных страницах должны быть различные фильтры. Например, на странице университетов должен быть поиск по году основания и региону. То есть, фильтры на каждой странице должны быть уникальными. Для каждого образовательного учреждения должны быть свои специфические поля для фильтрации. Компонент фильтра должен быть реализован один раз и не зависеть от полей конкретных образовательных учреждений.

Пожалуйста, используйте следующий стек технологий: React, RTK, React Router.
