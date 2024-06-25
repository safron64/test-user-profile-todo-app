# Приложение "Профиль пользователя и Список дел"

Это приложение на React, демонстрирующее отображение профиля пользователя и управление списком дел. Проект структурирован согласно методологии Feature-Sliced Design (FSD) для удобства поддержки и масштабируемости.

## Функционал

- Отображение профиля пользователя
- Управление списком дел (добавление, удаление, отметка как выполненное)
- Получение данных пользователей с публичного API и отображение их на странице
- Навигация между списком пользователей и страницей деталей пользователя

## Запуск проекта

1. Клонируйте репозиторий:
    ```bash
    git clone https://github.com/YOUR_USERNAME/user-profile-todo-app.git
    cd test-user-profile-todo-app
    ```

2. Установите зависимости:
    ```bash
    npm install
    ```

3. Запустите приложение:
    ```bash
    npm start
    ```

Приложение будет доступно по адресу `http://localhost:3000`.

## Структура проекта

- `src/app` - Корневые файлы приложения
- `src/pages` - Страницы приложения
- `src/widgets` - Виджеты приложения
- `src/features` - Функциональные компоненты приложения
- `src/shared` - Общие компоненты и утилиты
