import { VehicleRepository } from "../repositories/VehicleRepository";

class VehicleService {
    create(
        brand: string,
        color: string,
        model: string,
        plate: string,
        type: string
    ) {
        const vehicle = new VehicleRepository();

        return vehicle.create(brand, color, model, plate, type);
    }

    listAll() {
        const vehicle = new VehicleRepository();

        return vehicle.findAll();
    }

    update(
        id: string,
        brand: string,
        color: string,
        model: string,
        plate: string,
        type: string
    ) {
        const vehicle = new VehicleRepository();

        return vehicle.updateOne(id, brand, color, model, plate, type);
    }
}

export { VehicleService };
