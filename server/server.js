import express from 'express'
import cors from 'cors'
// import books from './routes/route.js'
import connectDB from './db/connection.js'
import { Book } from './models/bookModel.js'



const server = express();
const PORT = process.env.PORT || 5050

server.use(cors())
server.use(express.json())
// server.use("/books", books)

server.get('/', (req,res)=>{
	res.send(`Welcome to your server at port: ${PORT}`).status(200)
})


server.get("/books", async (req, res) => {
	try {
	  const books = await Book.find({});
	  res.status(200).send(books);
	} catch (err) {
	  console.error(err);
	  res.send("Not found").status(500);
	}
      });



server.post("/books", async(req,res)=>{

	try{
		if(
		!req.body.title||
		!req.body.page||
		!req.body.author||
		!req.body.pubYear
		){
			return res.status(400).send({message: `Fill out all required fields: title,page,author,pubYear`})
		}
		const newBook = {
			title: req.body.title,
			page: req.body.page,
			author: req.body.author,
			pubYear: req.body.pubYear
		}

		const book = await Book.create(newBook);

		return res.status(201).send(book)
	}catch(err){
		console.error(err.message)
		res.send({ message: err.message}).status(500)
	}
})


      

server.listen(PORT,async()=>{
	await connectDB();
	console.log(`The server is running on the following port: ${PORT}`)
})
