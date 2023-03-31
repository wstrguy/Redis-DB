import { Entity, Schema } from "redis-om";
import client from "../config/client.js";

class Person extends Entity {}

const personSchema = new Schema(Person, {
  firstname: { type: "string" },
  lastname: { type: "string" },
  email: { type: "string" },
  age: { type: "number" },
  password: { type: "string" },
});

export const personRepository = client.fetchRepository(personSchema);

await personRepository.createIndex();
