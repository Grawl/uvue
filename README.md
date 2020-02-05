# uvue

Frontend built on [Vue.js](https://vuejs.org/) with [Universal Vue](https://universal-vue.github.io) Server-Side Rendering. 

## Project setup

```
yarn install
```

### Run on production

Prepare bundle:

```
yarn build
```

Run [UVue server](https://universal-vue.github.io/docs/plugins/server.html):

```
yarn start
```

Server is configured to provide demo authorization and some endpoints with mock data. You can find it in `src/server`.

### Compile + hot-reload for development

```
yarn dev
```

### Generate static website

```
yarn static
```

### Lint and fix files

```
yarn lint
```

### Customize configuration

- [Vue CLI Configuration Reference](https://cli.vuejs.org/config/)
- [UVue Configuration](https://universal-vue.github.io/docs/reference/config.html)
- [UVue Server Configuration](https://universal-vue.github.io/docs/reference/server-config.html)
