import express from "express";
import HealthController from "../controllers/health/controller";

const router = express.Router();

router.get("/health", async (req, res) => {
  const controller = new HealthController();
  const response = await controller.getHealth();
  return res.send(response);
});

export default router;
