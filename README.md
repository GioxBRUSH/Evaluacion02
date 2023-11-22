# Evaluacion02

# Backend

## Prerequisitos

 - [Composer](https://getcomposer.org/)
 - [MySql](https://dev.mysql.com/downloads/mysql/)


## Primeros Pasos
Sigue estos pasos para poner en marcha el proyecto en tu máquina local:

Clona el repositorio en tu máquina local.

Navegue hasta el directorio del proyecto.
```bash
  cd backend_laravel
```
Dentro de la carpeta existe un archivo llamado .env.development cambie su nombre a .env y complete los campos necesarios para la conexion con la base de datos

```bash
    DB_DATABASE="nombre de su base de datos"
    DB_USERNAME=root
    DB_PASSWORD=contraseña
```
Ejecutar los comandos en orden 
```bash
    composer install
    php artisan key:generate
    php artisan migrate:fresh --seed
```

Finalmente, ejecuta el proyecto
```bash
    php artisan serve
```


## Frontend

## Prerequisitos
 - [Node](https://nodejs.org/en)

Navegue hasta el directorio del proyecto

```bash
  cd frontend_react2
```

Installe todas las dependencias

```bash
  npm install
```

Finalmente, ejecute el proyecto

```bash
  npm start
```