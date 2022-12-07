import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    const user = await prisma.User.findUnique({
      where: {
        email: data.email,
      },
    });
    console.log(user);
    if (user === null) {
      const userCreate = await prisma.User.create({
        data: {
          name: data.name,
          email: data.email,
          password: data.password,
        },
      });
      console.log(userCreate);
      res.json({
        body: userCreate,
        msg: `Successfully created new account for ${userCreate.name}, redirecting to home page!`,
      });
    }
    if (user != null) {
      res
        .status(400)
        .send({ msg: `User with email ${data.email} already registered` });
    }
  }
};
