import connectDB from "../mongoose";

export async function createInvoice(data: any) {
  try {
    connectDB();
    console.log(data);
  } catch (error) {}
}
