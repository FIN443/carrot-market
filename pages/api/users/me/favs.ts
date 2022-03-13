import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    session: { user },
  } = req;
  const favs = await client.record.findMany({
    where: {
      userId: user?.id,
      product: {
        records: {
          every: {
            userId: user?.id,
            kind: "Fav",
          },
        },
      },
    },
    include: {
      product: {
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
      },
    },
  });
  res.json({
    ok: true,
    favs,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
