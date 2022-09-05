import express from "express";
import cors from "cors";
import { createUserPr, deleteUserPr, getUserPr, getUsersPr } from "./prismaHandlers.js";

import bodyParser from "body-parser"

const app = express();

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(cors({
	origin: "*",
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: false,
	optionsSuccessStatus: 204
}))

app
	.route("/users")
	.get(async(req, res) => {
		const data = await getUsersPr();
		res.send(data)
	})
	.post(async (req, res) => {
		const data = await createUserPr(req.body)
		res.send(req.body)
	})
app
	.route("/users/:id")
	.get(async(req, res) => {
		const user = await getUserPr(+req.params.id);
		res.send(user)
	})
	.delete(async(req, res) => {
		const user = await deleteUserPr(+req.params.id);
		res.send(`${user} has been deleted`);
	})
app.listen(9000)