async function fetchUsers(page=2, limit=10) {
	const resp = await fetch(`http://localhost:8080/users?page=${page}&limit=${limit}`)
	const data = resp.json();
	return data
}

function drawUser(user) {
	const container = document.createElement("div");
	const inner = document.createElement("p");
	inner.innerHTML = user.name;

	container.append(inner)
	return container
}

function drawUsers(users) {
	const container = document.createElement("div");
	users.forEach(user => container.append(drawUser(user)));
	return container;
}

async function App() {
	const fiveEl = document.querySelector("#five")
	const tenEl = document.querySelector("#ten")
	const twentyEl = document.querySelector("#twenty")
	const prev = document.querySelector("#prev")
	const next = document.querySelector("#next")
	const root = document.querySelector("#root");
	const container = document.createElement("div");

	async function rerender() {
		container.innerHTML = ""
		const page = await fetchUsers(data.next.page, limit)
		container.append(drawUsers(page.results));
	}

	const data = await fetchUsers();
	container.append(drawUsers(data.results))
	
	let limit = 10;

	fiveEl.addEventListener("click", async() => {
		limit = 5;
		await rerender()
	})

	tenEl.addEventListener("click", async() => {
		limit = 10;
		await rerender()
	})

	twentyEl.addEventListener("click", async() => {
		limit = 20;
		await rerender()
	})

	next.addEventListener("click", async() => {
		if(data.next) {
			container.innerHTML = ""
			data.next.page += 1;
			data.previous.page += 1;
			await rerender()
		} else return
	})

	prev.addEventListener("click", async() => {
		if(data.previous.page >= 0) {
			container.innerHTML = ""
			data.next.page -= 1
			data.previous.page -= 1
			await rerender()
		} else return 
	})

	root.append(container)
	return root;
}

App()