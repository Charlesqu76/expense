import { neon } from "@neondatabase/serverless";
import dayjs from "dayjs";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = req.nextUrl;
  const start = searchParams.get("start") || dayjs().add(-30, "day");
  const end = searchParams.get("end") || dayjs().toISOString();
  // @ts-ignore
  const sql = neon(process.env.DATABASE_URL);
  const data = await sql`
  SELECT e.create_time, e.amount, e.description, e.id, c.name, c.icon, c.id AS category_id
  FROM expense AS e
    JOIN category AS c ON (e.category_id = c.id)
  WHERE e.create_time BETWEEN ${start} AND ${end}
  ORDER BY e.create_time DESC
  `;
  return Response.json({
    data,
  });
};
