<h1 align="center">
  <img alt="Gympoint" title="Gympoint" src="./public/gympoint-logo.png" width="200px" />
</h1>

<h3 align="center">
  Bootcamp application
</h3>

<blockquote align="center">“Faça seu melhor, mas sempre com prazo de entrega”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/RaphaelOliveiraMoura/gympoint-bootcamp?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/RaphaelOliveiraMoura/gympoint-bootcamp/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/RaphaelOliveiraMoura/gympoint-bootcamp?style=social">
  </a>
</p>

## Overview

This is a repository made in bootcamp gostack of [rocketseat](http://rocketseat.com.br).

It consists in a software to manager a gym wich users can register and subscribe on available plans made by gym administrators.

It project made part of the final revision, to finish the gostack bootcamp course, and it will be revisioned by rocketseat instructors.

`P.S: I'm learning english, so all text present here probably has a lot of erros. But to improve my english skills I choosed write everything in english`

## Preparing and running application

> Cloning repository:

```shell
  ~ git clone https://github.com/RaphaelOliveiraMoura/gympoint-bootcamp.git
  ~ cd gympoint-bootcamp
```

> Instalando dependências:

```shell
  ~ yarn install
  or
  ~ npm install
```

> Setting database

To the database you need to have a SQL database remote or localy. All sensible configs should be setted in environment as `environments variables`.

To make this localy, just create a .env file in root of application and put the values like the template `.env.example` file with the values that you want.

```shell
DB_DIALECT=postgres(default)
DB_HOST=localhost(required)
DB_USER=postgres(required)
DB_PASS=postgres(required)
DB_NAME=gympoint(required)
```

> Preparing database

To prepare the database, we use Sequelize CLI, so to create and prepare database to use, just run:

```shell
  ~ yarn sequelize db:create
  ~ yarn sequelize db:migrate
  ~ yarn sequelize db:seed:all
```

If database already exists, just run the bellow command to delete it.

```shell
  ~ yarn sequelize db:drop
```

> Using docker

You can set your database with docker, using the follow commands:

```shell
  ~ docker-compose up -d
```

## Documentation

There is a file called `insomnia.json` in the root of application, that is the exported documentation of [insomnia](https://insomnia.rest/).

Insomnia is a software similar to postman, you use that to test the requests to your application server side, seeing the response for each route with it params.

## Contributing

This is a open repository and is abble to receive contributing for all people.
If you have any question about project, just contact me or open a issue.
