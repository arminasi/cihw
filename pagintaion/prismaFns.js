import { PrismaClient } from "@prisma/client";

const data = new PrismaClient();

function createManyUsers(m) {
	let n = 1;
	const users = []
	while(n < m) {
		users.push({name: `User${n}`})
		n++;
	}
	return users;
}

async function createUsers() {
	try {
		await data.user.createMany({
			data: createManyUsers(100)
		})
	} catch (error) {
		console.log(error.message);
	} finally {
		async() => {
			await data.$disconnect()
		}
	}
}

createUsers()
