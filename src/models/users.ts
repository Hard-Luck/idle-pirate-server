import db from "../db/index";

export async function findOrCreateUser(id: string) {
  const user = await db.user.findFirst({ where: { id } });
  if (user) {
    return user;
  } else {
    return await db.user.create({ data: { id } });
  }
}
