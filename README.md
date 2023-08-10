# NWL
# TRILHA-SETUP
<br>
<br>

### Habits - Aplicação web

O Habits é um app para monitoramento de tarefas diárias para auxiliar seus usuários a rastrear suas atividades realizadas e não realizadas.

O fluxo da aplicação é simples: o usuário cadastra os hábitos desejados indicando em quais dias da semana deverão ser realizados e todos os dias ele terá uma listas de hábitos de acordo com o dia atual, aonde ele irá indicar o status de cada hábito e a aplicação irá gerar um progresso diário que será ilustrado na barra de progresso e também nas cores dos quadrados que representam os dias onde cores mais claras representam números maiores de hábitos completos.

- Cinza indica que nenhum hábito foi realizado.
- Cores mais escuras indicam pouco progresso nos hábitos diários.
- Cores mais claras indicam muito progresso nos hábitos diários.
- Cinza com opacidade reduzida indica dias futuros e não são clicáveis.

A aplicação possui, além do backend, aplicação web e mobile, as quais serão ilustradas a seguir.


## 🔖 Layout

You can view the project layout through the links below:

- [Layout](<https://www.figma.com/file/pJpaMSKVfCmPUMZJOVwquQ/Habits-(i)-(Community)?node-id=6%3A344&t=1UcC6dIPVGBxdhpz-1>)

Remembering that you need to have a [Figma](http://figma.com/) account to access it.

## 🧪 Technologies

This project was developed using the following technologies:

- [NodeJS](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://www.fastify.io/)
- [Prisma](https://www.prisma.io/)
- [ViteJS](https://vitejs.dev/)
- [ReactJS](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)

## 🧪 SOLID

Principles:

- Single Responsibility Principle: Each class has a unique responsibility;
- Open/Closed Principle: Application classes must be open for extension but closed for modification;
- Liskov Substitution Principle: We should be able to replace a parent class with an inheritance from it and everything still works;
- Interface Segregation Principle: Segregate Interfaces;
- Dependency Inversion Principle: Instead of the class fetching the dependencies it needs, the context informs the class of the required dependencies;

## 🚀 Getting started

Clone the project and access the folder.

```bash
$ cd nlw-setup-ignite
```

Follow the steps below:

### Web

```bash
# Install the web dependencies
$ cd web
$ npm install

# Start the web project
$ npm start
```

### Server

```bash
# Install the server dependencies
$ cd server
$ npm install

# Start the server project
$ npx prisma migrate deploy
$ npm run dev
```

### Mobile

```bash
# Install the mobile dependencies
$ cd mobile
$ npm install

# Start the mobile project
$ npm start
```
