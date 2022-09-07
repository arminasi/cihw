import express from "express";
import { getAllUsers } from "./dbHandlers.js";
import cors from "cors";

const app = express()
app.use(express.json())
app.use(cors())

app.route("/users")
.get(async(req, res) => {
	const users = await getAllUsers();
	const page = +req.query.page;
	const limit = +req.query.limit;

	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;

	const results = {};

	if(endIndex < users.length) {	
		results.next = {
			page: page + 1,
			limit: limit
		}
	}

	if(startIndex > 0) {
		results.previous = {
			page: page - 1,
			limit: limit
		}
	}
	results.results = users.slice(startIndex, endIndex)
	res.send(results);
})

app.listen(8080)