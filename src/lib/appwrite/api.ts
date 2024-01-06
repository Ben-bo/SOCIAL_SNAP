import { INewUser } from "@/types";
import { ID } from "appwrite";
import { account, appwriteConfig, avatars, databases } from "./config";

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    if (!newAccount) throw new Error();
    const avatarsUrl = avatars.getInitials(user.name);

    const createUserDb = await saveUser({
      accountId: newAccount.$id,
      email: newAccount.email,
      imageUrl: avatarsUrl,
      name: user.name,
      username: user.username,
    });
    return createUserDb;
  } catch (error) {
    console.log(error);
    throw new Error("Failed Create New User");
  }
}

export async function saveUser(user: {
  accountId: string;
  email: string;
  name: string;
  imageUrl: URL;
  username: string;
}) {
  try {
    const createUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user
    );

    return createUser;
  } catch (error) {
    console.log(error);

    throw error;
  }
}
