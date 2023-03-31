import { Router } from "express";
import { createPerson, deletePerson, getAllPersons } from "../controllers/person.controllers.js";

export const router = Router();


router.post("/person", createPerson);

router.get("/persons", getAllPersons);

router.delete("/person/:id", deletePerson);
