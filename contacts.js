import fs from "fs/promises";
import path from "path";

const contactsPath = path.join("db", "contacts.json");

export async function readContacts() {
  const data = await fs.readFile(contactsPath, "utf8");
  return JSON.parse(data);
}

export async function writeContacts(contacts) {
  return fs.writeFile(contactsPath, contacts);
}
