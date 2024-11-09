import { neon } from "@neondatabase/serverless";
import { NextRequest } from "next/server";

export const GET = async () => {
  // @ts-ignore
  const sql = neon(process.env.DATABASE_URL);
  const data = await sql`
  SELECT * 
  FROM expense
  ORDER BY create_time
  `;
  return Response.json({
    data,
  });
};

export const POST = async (req: NextRequest) => {
  const { amount, description, category_id } = await req.json();
  // @ts-ignore
  const sql = neon(process.env.DATABASE_URL);
  const res = await sql`
  INSERT INTO expense(amount, description, category_id)
  VALUES (${amount}, ${description}, ${category_id})
  `;
  return Response.json({});
};

export const PUT = async (req: NextRequest) => {
  const { amount, description, category_id, id } = await req.json();
  // @ts-ignore
  const sql = neon(process.env.DATABASE_URL);
  const res = await sql`
  UPDATE  expense SET amount = ${amount}, description=${description}, category_id=${category_id} WHERE id = ${id}`;
  return Response.json({});
};
