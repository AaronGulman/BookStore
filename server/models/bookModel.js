import mongoose from 'mongoose'

const bookSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true
		},
		page: {
			type: Number,
			required: true
		},
		author: {
			type: String,
			required: true
		},
		pubYear: {
			type: Date,
			required: true

		},
	},
	{
		timestamps: true,
	}
);

export const Book = mongoose.model('Book', bookSchema); // it had {name: String}
