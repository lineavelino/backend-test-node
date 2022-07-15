import { VehicleModel } from "../models/VehicleModel";

class VehicleRepository {
    async create(
        brand: string,
        color: string,
        model: string,
        plate: string,
        type: string
    ) {
        const vehicle = new VehicleModel({
            brand,
            color,
            model,
            plate,
            type
        });

        await vehicle.save();
        return vehicle;
    }

    async findAll() {
        const allVehicles = await VehicleModel.find();

        return allVehicles;
    }

    async updateOne(
        id: string,
        brand: string,
        color: string,
        model: string,
        plate: string,
        type: string
    ) {
        const vehicle = await VehicleModel.where({ _id: id }).updateOne({
            brand,
            color,
            model,
            plate,
            type
        });

        return vehicle;
    }

    async deleteOne(id: string) {
        const vehicle = await VehicleModel.deleteOne({ id });

        return vehicle;
    }
}

export { VehicleRepository };
