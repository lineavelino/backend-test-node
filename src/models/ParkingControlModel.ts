import { model, Schema } from "mongoose";

interface ParkingControlTypes {
    id: string;
    checkIn: Date;
    chekOut: Date;
    establishment_qtmotospace: number;
    establishment_qtcarspace: number;
}

const ParkingControlSchema = new Schema<ParkingControlTypes>({
    id: String,
    checkIn: Date,
    chekOut: Date,
    establishment_qtmotospace: Number,
    establishment_qtcarspace: Number
});

export const ParkingControlModel = model<ParkingControlTypes>(
    "ParkingControl",
    ParkingControlSchema
);
