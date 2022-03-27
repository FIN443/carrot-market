import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import { Kind } from "@prisma/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const {
      query: { page },
    } = req;
    const productCount = await client.product.count();
    const products = await client.product.findMany({
      include: {
        records: {
          where: {
            kind: "Fav",
          },
          select: {
            createAt: true,
            updatedAt: true,
            kind: true,
          },
        },
      },
      take: 10,
      skip: (+page - 1) * 10,
    });
    res.json({
      ok: true,
      products,
      pages: Math.ceil(productCount / 10),
    });
  }
  if (req.method === "POST") {
    const {
      body: { name, price, description },
      session: { user },
    } = req;
    const product = await client.product.create({
      data: {
        name,
        price: +price,
        description,
        image: "xx",
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    res.json({
      ok: true,
      product,
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
