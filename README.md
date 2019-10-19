# angular7-laravel-todo

This is simple todo app in which user can create,delete,edit todo tasks. This application is developed in angular 7 with laravel 5.

## Installation

Clone the repository-
```
git clone https://github.com/Asad-Iftikhar/angular7-laravel-todo.git
```
## Configuration of API - Laravel

Then cd into the folder with this command-

```
cd api
```


Then do a composer install
```
composer install
```

Then create a environment file using this command-
> cp .env.example .env
Then edit .env file with appropriate credential for your database server.

Then create a database named todo and then do a database migration using this command-

> php artisan migrate

Run server
Run server using this command-

> php artisan serve

## Configuration of Front App - Angular 7
Then cd into the folder with this command-

```
cd api
```


Then do a npm install to download the dependences
```
npm install
```
serve the front app by running the following command
```
ng serve
```



