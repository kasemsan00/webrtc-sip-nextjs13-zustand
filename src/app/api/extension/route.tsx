import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: Request) {
  const connection = await db();
  // const { searchParams } = new URL(request.url);
  // const [rows] = await connection.query("SELECT * FROM extension");
  return NextResponse.json({});
}
export async function POST(request: Request) {
  // const res = await request.json();
  // return NextResponse.json({ res });
  // const { extension, password, domain, webSocket } = req.body;
  // const [rows] = await connection.query(
  //   `INSERT INTO extension (extension, secret, domain, websocket) VALUES (?, ?, ?, ?)`,
  //   [extension, password, domain, webSocket]
  // );
  // res.status(200).json(rows);
}
