const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // ค่าต้องมี
  },
  email: {
    type: String,
    required: true, // ค่าต้องมี
    unique: true, // อีเมลต้องไม่ซ้ำ
  },
  password: {
    type: String,
    required: true, // ค่าต้องมี
  },
  role: {
    type: String,
    default: 'Buyer', // ตั้งค่า default เป็น 'Buyer'
  },
  isSeller: {
    type: Boolean,
    default: false, // ค่า default สำหรับ Seller เป็น false
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
