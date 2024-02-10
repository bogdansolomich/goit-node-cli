import * as contactsService from "./contacts.js";
import { program } from "commander";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const listContacts = await contactsService.listContacts();
      console.table(listContacts);
      break;

    case "get":
      const getContact = await contactsService.getContactById(id);
      console.table(getContact);
      break;

    case "add":
      const addUsers = await contactsService.addContact(name, email, phone);
      console.table(addUsers);
      break;

    case "remove":
      const removed = await contactsService.removeContact(id);
      console.table(removed);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
