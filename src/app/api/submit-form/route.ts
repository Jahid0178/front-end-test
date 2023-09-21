import Invoice from "@/libs/models/invoice.model";
import connectDB from "@/libs/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    connectDB();

    const data = await req.json();
    const createInvoice = await new Invoice(data);
    const result = await createInvoice.save();
    return NextResponse.json({
      message: "Success",
      status: 200,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    connectDB();

    const data = await Invoice.find();
    return NextResponse.json({
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function PATCH(req: NextRequest, res: NextResponse) {
  try {
    connectDB();

    const data = await req.json();

    const id = data._id;

    await Invoice.findByIdAndUpdate({ _id: id }, data);

    return NextResponse.json({
      message: "Success",
      status: 200,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    connectDB();
    const id = await req.json();
    const data = await Invoice.findByIdAndDelete({ _id: id });
    return NextResponse.json({
      message: "Success",
      status: 200,
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
}
