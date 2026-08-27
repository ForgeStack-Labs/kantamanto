import { db } from "../src/prisma/db";

const user = await db.orm.public.User.create({
  email: "adam@example.com",
  username: "adam",
  name: "Adam",
});

console.log("Created user:");
console.log(user);

const users = await db.orm.public.User.all();

console.log("\nAll users:");
console.log(users);
