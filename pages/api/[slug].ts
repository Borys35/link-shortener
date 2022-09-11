import { NextApiRequest, NextApiResponse } from "next";

const route = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "John Doe" });
};

export default route;
