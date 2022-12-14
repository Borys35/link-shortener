import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";
import { newLinkSchema } from "../../../lib/yupSchemas";
import { cuidToSlug } from "../../../utils/cuidToSlug";

const route = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(400).send("Invalid method.");

  const session = await getSession({ req });
  if (!session) return res.status(401).send("You're not authenticated.");

  const { body } = req;
  const valid = await newLinkSchema.isValid(body);
  if (!valid) return res.status(400).send("Provided data is invalid.");

  const { name, url } = body;

  const createdLink = await prisma.link.create({
    data: { name, url, slug: "", ownerId: session.user?.id },
  });

  const slug = cuidToSlug(createdLink.id);
  const updatedLink = await prisma.link.update({
    data: { slug },
    where: { id: createdLink.id },
  });

  res.status(200).json({ link: updatedLink });
};

export default route;
