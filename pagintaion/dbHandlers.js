import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();


export async function getAllUsers() {
	try {
		const data = await db.user.findMany()
		return data
	} catch(error) {
		console.log(error.message)
	} finally {
		async () => {
			await data.$disconnect();
		}
	}
}