import { neon } from "@neondatabase/serverless";

export const GET = async () => {
  // @ts-ignore
  const sql = neon(process.env.DATABASE_URL);
  const data = await sql`
  SELECT amount, expense.create_time, name ,icon
  FROM expense
    JOIN category ON (expense.category_id = category.id)
  ORDER BY create_time DESC
  `;
  return Response.json({
    data,
  });
};
