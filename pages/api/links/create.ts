import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

const route = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.body;

  const foundLink = await prisma.link.findFirst({
    where: { url, ownerId: undefined },
  });
  if (foundLink) return res.status(200).json({ link: foundLink });

  const createdLink = await prisma.link.create({ data: { url, slug: "" } });

  const slug =
    createdLink.id.substring(1, 3) +
    createdLink.id.substring(8, 10) +
    createdLink.id.substring(12, 14) +
    createdLink.id.substring(16, 17);

  const updatedLink = await prisma.link.update({
    data: { slug },
    where: { id: createdLink.id },
  });

  res.status(200).json({ link: updatedLink });
};

export default route;
