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

    async updateVehicle(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { brand, color, model, plate, type } = req.body;

            const service = new VehicleService();

            await service.update(id, brand, color, model, plate, type);

            return res.status(201).send({ status: "Atualizado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error });
        }
    }

    async deleteVehicle(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const service = new VehicleService();

            await service.delete(id);

            return res.status(200).send({ status: "Excluído com sucesso." });
        } catch (error) {
            return res.status(500).send({ error });
        }
    }
}

export { VehicleController };
