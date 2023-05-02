# Yata: Yes, another todo app
![Yata Logo](./public//logo_full.svg)

This is a web-based Todo app built using React, Next.js, and Sass with Atomic Design architecture. Firebase and NextAuth were used for authentication.

This app helps users keep track of their tasks by allowing them to create Todo lists called Collections. Within these Collections, users can manage their tasks, such as adding, editing, and deleting them. Users can also move tasks between different Collections as needed. Additionally, users can set due dates for their tasks, and if a task is due today, it will be highlighted on the Today page.


## Getting Started
To run this app locally, follow these steps:

1. Clone this repository
2. Install dependencies: `npm install`
3. Create a `.env.local` file in the root directory of the project and fill in the necessary Firebase and NextAuth environment variables from the `.env.example` file.
4. Start the app: `npm run dev`
5. Open http://localhost:3000 in your browser

## Environment Variables

This app uses environment variables to securely store credentials and other sensitive information. To use this app, create a `.env.local` file in the root directory of the project and fill in the necessary environment variables from the `.env.example` file.

## Features

- Create and manage Collections
- Add, edit, and delete tasks within Collections
- Move tasks between Collections
- Add due dates to tasks
- Today page shows tasks due today
- Firebase for data storage and authentication
- NextAuth for authentication with GitHub and Google providers
- Responsive design

## Technologies Used

- React
- Next.js
- Sass (CSS Modules)
- Firebase
- NextAuth
- Jest
- React Testing Library

## License

This app is licensed under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute this code, but please give appropriate credit to the original author (i.e. a link to the repository or the author's name) if you use it in your own project. I would really appreciate it!
