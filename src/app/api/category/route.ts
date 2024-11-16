import { neon } from "@neondatabase/serverless";
import { NextRequest } from "next/server";

export const GET = async () => {
  // @ts-ignore
  const sql = neon(process.env.DATABASE_URL);
  const data = await sql`
  SELECT * 
  FROM category
  ORDER BY create_time DESC
  `;
  return Response.json({
    data,
  });
};

export const POST = async (req: NextRequest) => {
  const { name, icon } = await req.json();
  // @ts-ignore
  const sql = neon(process.env.DATABASE_URL);
  const res = await sql`
  INSERT INTO category(name, icon)
  VALUES (${name}, ${icon})
  `;
  return Response.json({});
};

export const PUT = async (req: NextRequest) => {
  const { name, icon, id } = await req.json();
  // @ts-ignore
  const sql = neon(process.env.DATABASE_URL);
  const res = await sql`
  UPDATE  category SET icon = ${icon}, name=${name} WHERE id = ${id}`;
  return Response.json({});
};
