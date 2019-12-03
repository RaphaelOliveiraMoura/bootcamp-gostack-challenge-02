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

# 👀 Overview

```
  ~ yarn install
  ~ docker-compose up -d

  ~ yarn sequelize db:create
  ~ yarn sequelize db:migrate
  ~ yarn sequelize db:seed:all

  ~ yarn build
  ~ yarn start
```

# 🚀 Preparing and running application

## Installing project and dependences

```
  ~ git clone https://github.com/RaphaelOliveiraMoura/gostack-gympoint.git
  ~ cd gostack-gympoint/backend
  ~ yarn install (or npm install)
```

### Prerequisites

- [Docker Compose](https://docs.docker.com/compose/) or another setted Postgres service

First, you need to create a **.env** file in root of application. The structure of this file is similar to the **.env.example** file, just copy and put the correct informations for all variables.

## Setting database with docker compose

### Starting postgres service with docker compose

If you dont have postgres service installed localy, you can install it with **docker compose**:

```
  ~ docker-compose up -d
```

The postgres container will be created with a user and password setted in **.env** file.

If you try create postgres service with docker compose with a local postgres service running, you will receive a error because the service is already running in the local port 5432.

You can stop postgres service in linux with the command:

```
  ~ sudo systemctl stop postgresql.service
```

### Creating and configurating database

```
  ~ yarn sequelize db:create
  ~ yarn sequelize db:migrate
  ~ yarn sequelize db:seed:all
```

## Running application

In development mode:

```
  ~ yarn dev
```

In production mode:

```
  ~ yarn build
  ~ yarn start
```

# 📗 Documentation

There is a file called `insomnia.json` in the root of application, that is the exported documentation of [insomnia](https://insomnia.rest/).

Insomnia is a software similar to postman, you use that to test the requests to your application server side, seeing the response for each route with it params.

# 🕶️ Contributing

This is a open repository and is abble to receive contributing for all people.
If you have any question about project, just contact me or open a issue.
