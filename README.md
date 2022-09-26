# Developer Technical Test

Created by: Christopher Riding <chris@superduper.co.nz>
Date: 27th September 2022

I've created the front-end for this project using [Remix](https://remix.run/) with Typescript.

I'm using local storage to store the data. See below on how to run this project.

To take this project to completion would involve:
• Adding a backend, the ability to sign up/register <br />
• Adding other content pages About etc <br />
• Adding SEO, opengraph meta data <br />
• Adding Favicon <br />
• Fly app deployment with Docker <br />
• Production-ready SQLite Database <br />
• Healthcheck endpoint for Fly backups region fallbacks <br />
• GitHub Actions for deploy on merge to production and staging environments <br />
• Email/Password Authentication with cookie-based sessions <br />
• Database ORM with Prisma <br />
• End-to-end testing with Cypress <br />
• Local third party request mocking with MSW <br />
• Unit testing with Vitest and Testing Library <br />

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
npm run lint
```

Prettier for code formatting
```sh
npm run format
```

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.
