import { Client } from "redis-om";

/* pulls the Redis URL from .env */
const url = process.env.REDIS_URL;

/* create and open the Redis OM Client */
const client = await new Client().open(url);

console.log("Redis OM Client is connected");
export default client;
