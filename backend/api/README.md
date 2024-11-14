Все действия делать в папке /backend/api

## Устанавливаем NodeJS, лучший способ сделать это через nvm

1. Перейди на страницу GitHub проекта nvm для Windows:

https://github.com/coreybutler/nvm-windows/releases тыкаем 'nvm-setup.exe'

2. Скачать и установить nvm-setup.exe
3. Для проверки версии 'nvm version'
4. Дальше ставим NodeJS 'nvm install 14.18.0'
5. Переключаемся на установленную версию 'nvm use 14.18.0'
6. Проверяем правильная ли версия NodeJS установилась 'node -v'

## Далее устанавливаем PostgresSQL

1. Перейти сюда https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
2. Скачать 16.4 версию для windows
3. Просто жмем далее, на странице password ставим пароль (записать куда то пароль пригодится)
4. Запомнить порт который установщик предлагает (пригодится в дальнейшем)
5. Уберите галочку с Launch Stack Builder, и завершите установку
6. Ищем на винде SQL Shell (psql) (в поиске просто вводим)
7. Открывается командная строка Postgresql, нажимаем ENTER, ничего не вводя, до ввода пароля
8. Вводим пароль который указывали при установки
9. Если все прошло успешно то будет открыта командная строка postgres
10. Создаем базу данных вводом команды: CREATE DATABASE "test-task-pa";

## Далее устанавливаем библиотеки

1. Используем команду npm ci
2. Создаем .env файл, скопировав .env.example

```bash
PORT=3002
JWT_SECRET_KEY='любые буквы'
DB_HOST_IP=localhost
DB_PORT='порт который при установке в postgresql ставили' или 5432
DB_DATABASE=test-task-pa
DB_USER='user от postgresql' или postgres
DB_PASSWORD='пароль который ставили при установке postgresql' или postgres
```

3. Далее запускаем миграцию чтобы заполнить базу данных
   из папки backend\api> выполняем npm run migrate

4. После запускаем сервер npm start
