import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

const route = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") return res.status(400).send("Invalid method.");

  const session = await getSession({ req });
  if (!session) return res.status(401).send("You're not authenticated.");

  const links = await prisma.link.findMany({
    where: { ownerId: session.user?.id },
    include: { clicks: true },
  });

  res.status(200).json({ links });
};

export default route;
