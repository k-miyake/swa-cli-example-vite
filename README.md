# Azure Static Web Apps example by Vue3 + Vite

This repository is a sample Azure Static Web App developed by Vue3 and Vite.

## Run Locally using Azure Static Web Apps CLI

To install Azure Static Web Apps CLI, refer to [Azure/static-web-apps-cli](https://github.com/Azure/static-web-apps-cli)

Install dependencies

```sh
  npm install
```

Build frontend (Vue3)

```sh
  npm run build
```

Build backend (Azure Functions)

```sh
  cd api
  npm install
  npm run build
```

Start the emulator

```sh
  swa start ./dist --api ./api
```

## Routes

- `/admin`

  This page requires authentication.

- `/login`

  Authenticate with GitHub

- `/logout`

  Logs you out and clears your credentials

- `/time`

  Displays the time retrieved from the API.
