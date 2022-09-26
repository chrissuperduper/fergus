# Developer Technical Test

Created by: Christopher Riding <chris@superduper.co.nz>
Date: 27th September 2022

I've created the front-end for this project using [Remix](https://remix.run/) with Typescript.

I'm using local storage to store the data. See below on how to run this project.

To take this project to completion would involve:
• Adding a backend, the ability to sign up/register
• Adding other content pages About etc
• Adding SEO, opengraph meta data
• Adding Favicon
• Fly app deployment with Docker
• Production-ready SQLite Database
• Healthcheck endpoint for Fly backups region fallbacks
• GitHub Actions for deploy on merge to production and staging environments
• Email/Password Authentication with cookie-based sessions
• Database ORM with Prisma
• End-to-end testing with Cypress
• Local third party request mocking with MSW
• Unit testing with Vitest and Testing Library

This has been a fun little project and I've used it as a learning experience.

Thank you!
Chris

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

ESLint for linting
```sh
npm run Lint
```

Prettier for code formatting
```sh
npm run Lint
```

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.
