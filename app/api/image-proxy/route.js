import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.redirect(new URL("/blog/blog1.jpg", req.url));
  }

  try {
    const imageRes = await fetch(url);

    if (imageRes.status !== 200) {
      throw new Error("Invalid image response");
    } else {
      const contentType = imageRes.headers.get("content-type") || "image/jpeg";

      return new NextResponse(imageRes.body, {
        status: 200,
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "public, max-age=86400",
        },
      });
    }
  } catch (error) {
    const filePath = path.join(process.cwd(), "public/blog/blog1.jpg");
    const imageBuffer = await readFile(filePath);

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
      },
    });
  }
}
