import { neon } from "@neondatabase/serverless";
import { NextRequest } from "next/server";

export const GET = async () => {
  // @ts-ignore
  const sql = neon(process.env.DATABASE_URL);
  const data = await sql`
  SELECT * 
  FROM expense
  WHERE create_time >= NOW() - INTERVAL '30 days'
  ORDER BY create_time DESC
  `;

  return Response.json({
    data,
  });
};

export const POST = async (req: NextRequest) => {
  const { amount, description, category_id, create_time } = await req.json();
  // @ts-ignore
  const sql = neon(process.env.DATABASE_URL);
  const res = await sql`
  INSERT INTO expense(amount, description, category_id, create_time)
  VALUES (${amount}, ${description}, ${category_id} , ${create_time})
  `;
  return Response.json({});
};

export const PUT = async (req: NextRequest) => {
  const { amount, description, category_id, id, create_time } =
    await req.json();
  // @ts-ignore
  const sql = neon(process.env.DATABASE_URL);
  const res = await sql`
  UPDATE  expense SET amount = ${amount}, description=${description}, category_id=${category_id}, create_time=${create_time} WHERE id = ${id}`;
  return Response.json({});
};
