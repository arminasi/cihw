import { App } from "./components/App.js";

export async function getInfo() {
	const resp = await fetch("http://127.0.0.1:9000/users");
	const data = resp.json();
	return data;
}

export async function deleteUser(id) {
	const resp = await fetch(`http://127.0.0.1:9000/users/${id}`, {
		method: "DELETE",
		headers: {
			'Accept': 'application/json',
      'Content-Type': 'application/json'
		}
	})
}

export async function createData(inputValue) {
	//const splittedData = inputValue.split(" ");
	const resp = await fetch("http://127.0.0.1:9000/users", {
		method: "POST",
		body: JSON.stringify({inputValue}),
		headers: {
			'Accept': 'application/json',
      'Content-Type': 'application/json'
		}
	});	
}

export async function filterData(inputValue) {
	const data = await getInfo();
	console.log(data)
	const filtered = data.filter(item => {
		return item.brands.name === inputValue
	})
	console.log(filtered);
	return filtered;
}


App()