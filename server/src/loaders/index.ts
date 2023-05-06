import { Application } from "express";
import expressLoader from "./express";
import mysqlLoader from "./mysql";

export default async ({ expressApp }: { expressApp: Application }) => {
  await expressLoader({ app: expressApp });
  console.log("Express Intialized");
  await mysqlLoader();
  console.log("MySQL Intialized");
};
