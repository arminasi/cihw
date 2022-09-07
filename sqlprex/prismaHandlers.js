import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function getUsersPr() {
	const data = await client.car.findMany({
		include: {
			Brand: true
		}
	});
	return data;
}

export async function getUserPr(id) {
	const data = await client.car.findMany({
		where: {
			id: id
		},
	})

	return data
}

export async function deleteUserPr(id) {
	const data = await client.car.delete({
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
		if(header.length === 3) {
			await client.brand.create({
				data: {
					name: header[0],
				}
			})
			await client.car.create({
				data: {
					model: header[1],
					year: +header[2],
				}
			})
		}
	} catch (err){
		console.log(err.message)
	}
}

////////////////queryy

function pagination(params) {
	const res = JSON.stringify(params);
	const { page } = JSON.parse(res);
	const { next } = JSON.parse(res);

	return {page, next};
}

export async function carPagination() {
		
}