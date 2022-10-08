import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { anonymousLinkSchema } from "../../../lib/yupSchemas";
import { cuidToSlug } from "../../../utils/cuidToSlug";

const route = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(400).send("Invalid method.");

  const { body } = req;
  const valid = await anonymousLinkSchema.isValid(body);
  if (!valid) return res.status(400).send("Provided data is invalid.");

  const { url } = body;

  const foundLink = await prisma.link.findFirst({
    where: { url, ownerId: undefined },
  });
  if (foundLink) return res.status(200).json({ link: foundLink });

  const createdLink = await prisma.link.create({ data: { url, slug: "" } });

  const slug = cuidToSlug(createdLink.id);

  const updatedLink = await prisma.link.update({
    data: { slug },
    where: { id: createdLink.id },
  });

  res.status(200).json({ link: updatedLink });
};

export default route;
