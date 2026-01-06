import Address from "../models/Address.js";

// Add address: /api/address/add
export const addAddress = async (req, res) => {
  try {
    const { address } = req.body;
    console.log(address);
    await Address.create({ ...address, userId: req.userId });
    res.json({ success: true, message: "Address added successfully" });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to add addresssssssssss",
      error: error.message,
    });
  }
};

// Get addresses: /api/address/get
export const getAddresses = async (req, res) => {
  try {
    // const { userId } = req.body;

    const addresses = await Address.find({ userId: req.userId });

    res.json({
      success: true,
      addresses,
      message: "Addresses fetched successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to fetch addresses",
      error: error.message,
    });
  }
};
