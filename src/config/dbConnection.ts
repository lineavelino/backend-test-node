/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { connect } from "mongoose";
import "dotenv/config";

export async function runDb() {
    try {
        await connect(process.env.DB_URL!);
    } catch (error) {
        console.log(error);
    }
}
