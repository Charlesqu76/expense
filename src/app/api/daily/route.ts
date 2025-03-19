import { neon } from "@neondatabase/serverless";
import { NextRequest } from "next/server";
import dayjs from "dayjs";

export const GET = async () => {
  // @ts-ignore
  const sql = neon(process.env.DATABASE_URL);
  const res = await sql`
   SELECT 
    d.id AS id, 
    d.expense_id, 
    e.amount,  
    e.description, 
    c.name, 
    c.icon, 
    e.create_time  
FROM daily AS d
JOIN expense AS e ON d.expense_id = e.id
JOIN category AS c ON e.category_id = c.id;
    `;

  for (const i of res) {
    const { create_time, amount } = i;
    const diff = dayjs().diff(dayjs(create_time), "day");
    console.log(diff);
    i.daily = amount;
    if (diff > 0) {
      i.daily = Number((amount / diff).toFixed(2));
    }
  }

  return Response.json({ data: res });
};

export const POST = async (req: NextRequest) => {
  const { id } = await req.json();
  // @ts-ignore
  const sql = neon(process.env.DATABASE_URL);
  const res = await sql`
  INSERT INTO daily(expense_id)
  VALUES (${id})
  `;
  return Response.json({});
};

export const DELETE = async (req: NextRequest) => {
  const { id } = await req.json();
  // @ts-ignore
  const sql = neon(process.env.DATABASE_URL);
  const res = await sql`
  DELETE FROM daily
  WHERE id = ${id}
  `;
  return Response.json({});
};
