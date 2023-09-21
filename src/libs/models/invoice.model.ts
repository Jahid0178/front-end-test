import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  client: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  trip: {
    type: String,
    required: true,
  },
  productType: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const Invoice =
  mongoose.models.Invoice || mongoose.model("Invoice", invoiceSchema);

export default Invoice;
