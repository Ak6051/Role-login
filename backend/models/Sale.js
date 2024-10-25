
const mongoose = require( 'mongoose');

const saleSchema = new mongoose.Schema({
  LeadBy: { type: String, required: true },
  companyName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  websiteUrl: { type: String, required: true },
  emailId: { type: String, required: true },
  callStatus: { type: String, required: true },
  meetingDate: { type: Date },
  meetingTime: { type: String },
  contactPerson: { type: String, required: true },
  designation: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale ; 


