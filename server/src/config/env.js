import dotenv from "dotenv";
dotenv.config();

import z from "zod";
//zod data validation hai iska use karke env data ko validate kr rhe hai string hai ki number hai aisa

const envSchema = z.object({
 PORT: z.coerce.number(), // coerce typecast kar dega waha se string aayega toh number me convert kar dega
 MONGO_URL: z.string(),
 NODE_ENV: z.string(),
});

const parsed = envSchema.parse(process.env); //parse kiya object mil jayega

if (!parsed) { // for empty object
   console.log("check your env");
}

export default parsed;

// console.log() not used in our project becuase performance is not good
// blocking nature ka rehta hai console
// jab bhi yeh run hota hai toh aage ka asynchronous rok deta hai
// backend bana rha hai compulsory cheezo ko parallely execute krna padhta hai
// takleef dega jab  aapke same route par 100 users request karenge

/*console.log() debugging ke liye useful hai, lekin production me excessive
usage performance ko impact kar sakta hai. High-traffic applications me har
request ke saath logs generate hone lagte hain, jisse I/O operations badhte
hain aur response time affect ho sakta hai. Isliye production-grade
applications me structured logging libraries jaise Pino ya Winston use
karte hain, jahan log levels, log rotation aur monitoring support milta hai.
*/

