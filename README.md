# Product Filter App

## Description

This Tech Assessment demonstrates the use of Next.js to build a product filtering page based on various product properties.

## Getting Started

1. Clone the repository

2. Create a .env file from the sample

```bash
cp .env.sample .env
```

3. Create your online database account in <https://upstash.com/docs/introduction>

4. Fill the .env data required

```bash
UPSTASH_VECTOR_REST_URL=""
UPSTASH_VECTOR_REST_TOKEN=""`
```

5. Install the necessary dependencies: Before running the development server, make sure to install all project dependencies. You can do this with one of the following commands:

```bash
npm install
```

6. Run the development server: You can start the development server using one of the following commands:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Code Quality and Best Practices

The platform ensures high code quality and follows best practices.

## Core libraries used

- **Next.js:** The primary framework used for this project.
- **React:** Serving as the foundational UI library.
- **TypeScript:** Integrating strong static typing and advanced features to enhance large-scale development and maintain code quality.
- **Lodash (Debounce):** Utilized for implementing efficient input handling, preventing unnecessary function calls during rapid user input.

## UX/UI

**Tailwind CSS:** Employed for styling the application, providing a utility-first approach to building responsive and modern interfaces.

## Database

**@upstash/vector:** This online service is used as the project's database, offering scalable and efficient data storage.

## Contributions

Contributions are welcome. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch `git checkout -b feature/new-feature`.
3. Make your changes and add them to the stagging area `git add .`
4. Commit changes `git commit -am 'Add new feature'`.
5. Push your branch `bash git push origin feature/new-feature)`
6. Open a Pull Request in order to merge your branch into develop.

Thanks for helping :smirk:!!
