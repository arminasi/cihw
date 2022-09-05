// import { PrismaClient } from "@prisma/client";

// const client = new PrismaClient();


// async function createData() {
// 	try {
// 		const res = await client.car.createMany(
// 			{
// 				data: [
// 					{year: 2020, model: "a180"},
// 					{year: 2018, model: "435i"},
// 					{year: 2005, model: "540i"},
// 					{year: 2010, model: "328i"},
// 					{year: 2008, model: "Civic"},
// 					{year: 2022, model: "Pilot"}
// 				]
// 			}
// 		)
// 	} catch(err) {
// 		console.log(err.message);
// 	} finally {
// 		async() => {
// 			await client.$disconnect();
// 		}
// 	}
// }

// createData()

// async function createData2() {
// 		try {
// 			const res = await client.brand.createMany(
// 				{
// 					data: [
// 						{name: "Bmw"},
// 						{name: "Mercedes"},
// 						{name: "Honda"}
// 					]
// 				}
// 			)
// 		} catch(err) {
// 			console.log(err.message);
// 		} finally {
// 			async() => {
// 				await client.$disconnect();
// 			}
// 		}
// 	}
	
// 	createData2()

// async function createData3() {
// 		try {
// 			const res = await client.user.createMany(
// 				{
// 					data: [
// 						{name: "Jack", car_id: 1, brand_id: 2},
// 						{name: "Andrew", car_id: 2, brand_id: 1},
// 						{name: "Matthew", car_id: 3, brand_id: 1},
// 						{name: "Tim", car_id: 4, brand_id: 1},
// 						{name: "Ann", car_id: 5, brand_id: 3},
// 						{name: "Luke", car_id: 6, brand_id: 3},
// 					]
// 				}
// 			)
// 		} catch(err) {
// 			console.log(err.message);
// 		} finally {
// 			async() => {
// 				await client.$disconnect();
// 			}
// 		}
// 	}
	
// 	createData3()