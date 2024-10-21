
const  Sale = require ('../models/Sale.js');

exports.createSale = async (req, res) => {
  try {
    const {
      companyName,
      phoneNumber,
      address,
      websiteUrl,
      emailId,
      callStatus,
      meetingDate,
      meetingTime,
      contactPerson,
      designation,
      description,
    } = req.body;

    const sale = new Sale({
      companyName,
      phoneNumber,
      address,
      websiteUrl,
      emailId,
      callStatus,
      meetingDate,
      meetingTime,
      contactPerson,
      designation,
      description,
    });

    await sale.save();
    res.status(201).json({ message: 'Sale created successfully!', sale });
  } catch (error) {
    res.status(500).json({ message: 'Error creating sale', error: error.message });
  }
};
