import express from "express";
import { VehicleController } from "../controllers/VehicleController";

export const vehicleRoutes = express.Router();

const vehicleController = new VehicleController();

vehicleRoutes.post("/vehicles", vehicleController.createVehicle);
vehicleRoutes.get("/vehicles", vehicleController.listAllVehicles);
vehicleRoutes.put("/vehicles/:id", vehicleController.updateVehicle);
vehicleRoutes.delete("/vehicles/:id", vehicleController.deleteVehicle);
