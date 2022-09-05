import { createData, getInfo, deleteUser, filterData } from "../script.js";
import { Users } from "./Users.js";;


export async function App() {
	const root = document.querySelector("#root");
	const container = document.createElement("div");

	const addBtn = document.querySelector("#addBtn");
	const input = document.querySelector("#input");

	const filterInput = document.querySelector("#filterInput");
	const filterBtn = document.querySelector("#filterBtn");


	addBtn.addEventListener("click", () => createData(input.value))
	filterBtn.addEventListener("click", () => filterData(filterInput.value))

	container.setAttribute("class", "wrapper");

	const data = await getInfo();

	container.append(Users(data, deleteUser));
	root.append(container);
	return root;
}