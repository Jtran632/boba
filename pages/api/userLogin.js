import { PrismaClient } from "@prisma/client";
import userValid from "./userValid";

const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    if (req.method === "POST") {
        const data = JSON.parse(req.body);
        const validUser = await prisma.User.findFirst({
          where: {
            email: data.email,
            password: data.password,
          },
        });
    console.log(validUser);
    if (validUser === null) {
      res.status(400).send({ msg: `Wrong email/password combination` });
    } else {
        res.json({
            body: validUser,
            msg: `Successfully logged in for ${validUser.name}, redirecting to home page!`,
          });
    }
  }
};
