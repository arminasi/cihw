import { User } from "./user.js";

export function Users(users, deleteUser) {
	const container = document.createElement("div");
	container.setAttribute("class", "users");

	users.forEach(user => {
		container.append(User(user, deleteUser))
	})

	return container;
}