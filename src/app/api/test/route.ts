// import { connectMongoDB } from "@/lib/db";
// import Cars, { ICar } from "@/models/cars";
// import { NextResponse } from "next/server";

// export async function GET(
//   request: Request
// ): Promise<{ status: "success" | "unknownError" }> {
//   const { name, image, passengers, cost, type, desc, pic1, pic2, pic3 }: any =
//     request.body;

//   try {
//     connectMongoDB();

//     const cars = new Cars({
//       name,
//       image,
//       passengers,
//       cost,
//       type,
//       desc,
//       pic1,
//       pic2,
//       pic3,
//     });
//     cars.save();

//     NextResponse.json({ status: "success" });
//   } catch (error) {
//     console.log({ error });
//     return { status: "unknownError" };
//   }
// }
