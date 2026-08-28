import {
  defineContract,
  enumType,
  member,
} from "@prisma/orm-postgres/contract-builder";

const pgText = { codecId: "pg/text@1", nativeType: "text" } as const;

const Role = enumType(
  "Role",
  pgText,
  member("CUSTOMER", "CUSTOMER"),
  member("VENDOR", "VENDOR"),
  member("ADMIN", "ADMIN"),
);

export const contract = defineContract({}, ({ field, model, rel }) => {
  const User = model("User", {
    fields: {
      id: field.id.uuidv7String(),
      email: field.text().unique(),
      username: field.text().optional(),
      name: field.text().optional(),
      image: field.text().optional(),
      password: field.text().optional(),
      role: field.namedType(Role).default(Role.members.CUSTOMER),
      emailVerified: field.temporal.createdAtString().optional(),
      createdAt: field.temporal.createdAtString(),
      updatedAt: field.temporal.updatedAtString(),
    },
  });

  const Account = model("Account", {
    fields: {
      id: field.id.uuidv7String(),
      userId: field.uuidString(),
      type: field.text(),
      provider: field.text(),
      providerAccountType: field.text(),
      refreshToken: field.text().optional(),
      accessToken: field.text().optional(),
      expiresAt: field.text().optional(),
      tokenType: field.text().optional(),
      scope: field.text().optional(),
      idToken: field.text().optional(),
      sessionState: field.text().optional(),
    },
  });

  const Session = model("Session", {
    fields: {
      id: field.id.uuidv7String(),
      sessionToken: field.text().unique(),
      userId: field.uuidString(),
      expires: field.text(),
    },
  });

  const VerificationToken = model("VerificationToken", {
    fields: {
      identifier: field.text(),
      toke: field.text().unique(),
      expires: field.text(),
    },
  });

  return {
    models: {
      User,
      Account,
      Session,
      VerificationToken,
    },
  };
});

/*
import { defineContract } from "@prisma/orm-postgres/contract-builder";
export const contract = defineContract({}, ({ field, model, rel }) => {
  const User = model("User", {
    fields: {
      id: field.id.uuidv7String(),
      email: field.text().unique(),
      username: field.text().optional(),
      name: field.text().optional(),
      createdAt: field.temporal.createdAtString(),
      updatedAt: field.temporal.updatedAtString(),
    },
  });
  const Post = model("Post", {
    fields: {
      id: field.id.uuidv7String(),
      title: field.text(),
      content: field.text().optional(),
      authorId: field.uuidString(),
      createdAt: field.temporal.createdAtString(),
      updatedAt: field.temporal.updatedAtString(),
    },
  });
  return {
    models: {
      User: User.relations({ posts: rel.hasMany(Post, { by: "authorId" }) }),
      Post: Post.relations({
        author: rel.belongsTo(User, { from: "authorId", to: "id" }),
      }),
    },
  };
});
*/
