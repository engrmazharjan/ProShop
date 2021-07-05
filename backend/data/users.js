import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "Mazhar Jan",
    email: "mazhar@example.com",
    password: bcrypt.hashSync("123456", 10),
  },

  {
    name: "Waqar Ahmad",
    email: "waqar@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
