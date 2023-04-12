import express from "express";
import db from "./db/db.mjs";
import File from "./db/tables/FilesTable.mjs";
import Location from "./db/tables/LocationTable.mjs";
import Object from "./db/tables/ObjectsTable.mjs";
import SaveList from "./db/tables/SaveListTable.mjs";
import UserProfile from "./db/tables/UserProfile.mjs";
import User from "./db/tables/UserTable.mjs";

await db.sync({ alter: true })