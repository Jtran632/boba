import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    const user = await prisma.User.findUnique({
      where: {
        id: data.userId,
      },
    });
    console.log("Data", data);
    console.log("User", user);
    const createDrink = await prisma.Drink.create({
      data: {
        flavors: data.flavors,
        toppings: data.toppings,
        teaBase: data.teaBase,
        sweetness: data.sweetness,
        ice: data.ice,
        cost: Number(data.cost),
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    console.log(createDrink);
    res.json({ body: createDrink, msg: "Success Order" });
  } else if (req.method === "DELETE") {
    const data = JSON.parse(req.body);
    console.log(data);
    const createDrink = await prisma.Drink.delete({
      where: {
        id: data,
      },
    });
    // console.log(createDrink);
    res.json({ body: createDrink, msg: "Order Deleted" });
  } else if (req.method === "GET") {
    const createUser = await prisma.Drink.findMany();
    res.json(createDrink);
  }
};
