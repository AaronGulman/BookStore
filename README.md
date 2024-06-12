# BookStore Project

## Technologies

- **Frontend:**
  - React
  - Vite
  - Tailwind CSS
- **Backend:**
  - Node.js
  - Express
- **Database:**
  - MongoDB
- **Miscellaneous:**
  - ESLint

## Project Structure

```
/BookStore
│
├── /client
│   ├── /public
│   ├── /src
│   │   ├── /assets
│   │   ├── /components
│   │   │   ├── /home
│   │   │   │   ├── BookModal.jsx
│   │   │   │   ├── BooksCard.jsx
│   │   │   │   ├── BookSingleCard.jsx
│   │   │   │   ├── BooksTable.jsx
│   │   │   ├── BackButton.jsx
│   │   │   ├── Spinner.jsx
│   │   ├── /pages
│   │   │   ├── CreateBook.jsx
│   │   │   ├── DeleteBook.jsx
│   │   │   ├── EditBook.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── ShowBook.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   ├── .eslintrc.cjs
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│
├── /server
│   ├── /db
│   │   ├── connection.js
│   ├── /models
│   │   ├── bookModel.js
│   ├── /routes
│   │   ├── route.js
│   ├── node_modules
│   ├── config.env
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│
├── .gitignore
├── README.md
```

## Description

The BookStore project is a web application designed to manage a collection of books. Users can perform CRUD (Create, Read, Update, Delete) operations on the book records. The project is divided into a frontend and backend, utilizing modern web technologies for an efficient and responsive user experience.

### Frontend

The frontend is built with React, Vite, and Tailwind CSS, providing a fast, responsive, and highly interactive user interface with modern styling.

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that significantly improves the development experience.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.

### Backend

The backend is built with Node.js and Express, handling the application's server-side logic and interactions with the database.

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.

### Database

MongoDB is used as the database to store book information, providing a scalable and flexible NoSQL solution.

### Miscellaneous

- **ESLint**: A static code analysis tool to identify and fix problems in JavaScript code.

## Setup Instructions

### Prerequisites

- Node.js
- MongoDB

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/BookStore.git
   cd BookStore
   ```

2. **Install dependencies:**

   For the client:

   ```sh
   cd client
   npm install
   ```

   For the server:

   ```sh
   cd ../server
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `server` directory with the following content:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Run the application:**

   Start the server:

   ```sh
   cd server
   npm start
   ```

   Start the client:

   ```sh
   cd ../client
   npm run dev
   ```

5. **Open the application in your browser:**

   Navigate to `http://localhost:3000`

## Usage

- **Home Page:** View a list of all books.
- **Create Book:** Add a new book to the collection.
- **Edit Book:** Modify the details of an existing book.
- **Delete Book:** Remove a book from the collection.
- **View Book:** See the details of a single book.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
