# AngularPokeApp
Una aplicación de Pokémon que nos permite mostrar la pokédex de entre la primera y la quinta generación, además de crear nuestro propio equipo.

Para usar la aplicación tienes que usar en la consola de comandos "npm -i".

El equipo que hagas se guarda en el localstorage por lo que una vez cierres el navegador no vas a perder lo que guardes. 

El front de la página deja mucho que desear, prometo en algún momento actualizarlo. 

-------------------------------------------------

## Quick start

**WARNING**

> Verify that you are running node 12.4.0 by running node -v in a terminal/console window. Older
> versions produce errors, but newer versions are fine.

```bash
npm i
npm start
```

| Tasks                      | Description                                                                                          |
| -------------------------- | ---------------------------------------------------------------------------------------------------- |
| npm start                  | Start the app in development mode with the english language only                                     |
| npm start:es               | Start the app in development mode with the spanish language only                                     |
| dev:ssr                    | Start the server like SSR                                                                            |
| extract-i18n               | Extract all messages from templates and ts files and update the language files with new translations |
| npm run lint               | Run the linter (tslint)                                                                              |
| npm run test               | Run all unit tests with karma and jasmine                                                            |
| npm run test:app:watch     | Run app unit tests and wait for changes                                                              |
| npm run test:library:watch | Run library unit tests and wait for changes                                                          |
| npm run e2e                | Run end to end tests with protractor                                                                 |
| npm run build:prod         | Build the app for production with english translations                                               |
| npm run build:prod:es      | Build the app for production with spanish translations                                               |
| npm run builds:prod        | Builds both configurations                                                                           |
| npm run build:ssr:prod     | Builds the server with universal in SSR mode                                                         |
| npm run serve:ssr          | Start the node server for angular universal                                                          |
| npm run build:library      | Build the library                                                                                    |
| npm run bundle-report      | Build and run webpack-bundle-analyzer over stats json                                                |
| npm run release:minor      | Create a new minor release using standard-version                                                    |
| npm run release:major      | Create a new major release using standard-version                                                    |
| npm run ci                 | Execute linter, tests and production builds                                                          |

