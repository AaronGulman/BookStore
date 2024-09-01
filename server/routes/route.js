import { Book } from "../models/bookModel.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    //   res.status(200).send(books); -- my version
    return res.status(200).json({
      count: books.length,
      data: books,
    }); //-- tutorial version
  } catch (err) {
    console.error(err);
    res.send("Not found").status(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json(book);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.page ||
      !req.body.author ||
      !req.body.pubYear
    ) {
      return res
        .status(400)
        .send({
          message: `Fill out all required fields: title,page,author,pubYear`,
        });
    }
    const newBook = {
      title: req.body.title,
      page: req.body.page,
      author: req.body.author,
      pubYear: req.body.pubYear,
    };

    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (err) {
    console.error(err.message);
    res.send({ message: err.message }).status(500);
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.page ||
      !req.body.author ||
      !req.body.pubYear
    ) {
      return res
        .status(400)
        .send({
          message: `Fill out all required fields: title,page,author,pubYear`,
        });
    }

    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Updated successfully" });
  } catch (err) {
    console.error(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);

    res.status(200).send("Book successfully deleted");
  } catch (err) {
    console.error(err);
  }
});

export default router;
