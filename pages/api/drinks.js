import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    const createDrink = await prisma.Drink.create({
      data,
    });
    // console.log(createDrink);
    res.json(createDrink);
  } else if (req.method === "DELETE") {
    const data = JSON.parse(req.body);
    console.log(data);
    const createDrink = await prisma.Drink.delete({
      where: {
        id: data,
      },
    });
    // console.log(createDrink);
    res.json(createDrink);
  } else if (req.method === "GET") {
    const createDrink = await prisma.Drink.findMany();
    res.json(createDrink);
  }
};
