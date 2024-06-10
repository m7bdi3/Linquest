import { auth } from "@clerk/nextjs/server";

const AdminIDS = ["user_2gxv8vHTD1a6pbSgXNhqQ8N9370"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) return false;

  return AdminIDS.indexOf(userId) !== -1;
};
