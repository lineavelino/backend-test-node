import { Request, Response } from "express";
import { VehicleService } from "../services/VehicleService";

class VehicleController {
    async createVehicle(req: Request, res: Response) {
        try {
            const { brand, color, model, plate, type } = req.body;

            const service = new VehicleService();
            const vehicle = await service.create(
                brand,
                color,
                model,
                plate,
                type
            );

            return res.status(201).send({ data: vehicle });
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async listAllVehicles(req: Request, res: Response) {
        try {
            const service = new VehicleService();

            const allVehicles = await service.listAll();

            return res.status(200).send({ data: allVehicles });
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

export { VehicleController };
