export function User(data, deleteUser) {
	const container = document.createElement("div");
	container.setAttribute("class", "user")

	container.addEventListener("click", () => {

	})

	const delEl = document.createElement("button");
	delEl.setAttribute("class","delBtn")
	delEl.innerText = "X";
	
	const nameEL = document.createElement("div");
	nameEL.setAttribute("class", "name")

	const carEl = document.createElement("div");
	carEl.setAttribute("class", "car")
	
	const brandEl = document.createElement("div")
	brandEl.setAttribute("class", "brand")

	const yearEl = document.createElement("div");
	yearEl.setAttribute("class", "year")

	nameEL.innerText = data.name;
	carEl.innerText = data.cars.model
	brandEl.innerText = data.brands.name
	yearEl.innerText = data.cars.year

	delEl.addEventListener("click", () => deleteUser(data.id))
	
	container.append(nameEL, yearEl, carEl, brandEl, delEl);
	return container;
}