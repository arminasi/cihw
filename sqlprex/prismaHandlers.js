import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function getUsersPr() {
	const data = await client.user.findMany(
		{
			include: {
				brands:true,
				cars:true
			}
		}
		);
	return data;
}

export async function getUserPr(id) {
	const data = await client.user.findMany({
		where: {
			id: id
		}
	})

	return data
}

export async function deleteUserPr(id) {
	const data = await client.user.delete({
		where: {
			id: id
		}
	})
	return data;
}

export async function createUserPr(body) {
	const { inputValue } = body;
	const header = inputValue.split(" ");
	try {
		if(header.length === 4) {
			await client.brand.create({
				data: {
					name: header[3],
				}
			})
			await client.car.create({
				data: {
					year: +header[1],
					model: header[2],
				}
			})
			await client.user.create({
				data: {
					name: header[0],
				},
			})
		}
	} catch (err){
		console.log(err.message)
	}
}