export function User(data, deleteUser) {
	const container = document.createElement("div");
	container.setAttribute("class", "user")

	container.addEventListener("click", () => {

	})

	const delEl = document.createElement("button");
	delEl.setAttribute("class","delBtn")
	delEl.innerText = "X";

	const carEl = document.createElement("div");
	carEl.setAttribute("class", "car")
	
	const brandEl = document.createElement("div")
	brandEl.setAttribute("class", "brand")

	const yearEl = document.createElement("div");
	yearEl.setAttribute("class", "year")

	carEl.innerText = data.year
	brandEl.innerText = data.model
	yearEl.innerText = data.Brand.name

	delEl.addEventListener("click", () => deleteUser(data.id))
	
	container.append(yearEl, carEl, brandEl, delEl);
	return container;
}