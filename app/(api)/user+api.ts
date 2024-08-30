import { neon } from "@neondatabase/serverless";

export async function POST(req: Request) {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const { name, email, clerkId } = await req.json();

    if (!name || !email || !clerkId) {
      return Response.json(
        {
          error: "Missing Required Fileds",
        },
        {
          status: 400,
        },
      );
    }

    const response = await sql`
  INSERT INTO users(
  name, email, clerk_Id
  )
  VALUES(
  ${name},
  ${email},
  ${clerkId}
  )
  `;

    return new Response(JSON.stringify({ data: response }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error Creating User:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
