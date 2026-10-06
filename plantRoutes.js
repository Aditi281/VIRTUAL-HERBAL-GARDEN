const express = require("express");
const router = express.Router();

const plantController = require("../controllers/plantController");

// ================= GET =================

router.get("/plants/search", plantController.searchPlant);

router.get("/plants", plantController.getAllPlants);

router.get("/plants/:id", plantController.getPlantById);


// ================= POST =================

router.post("/plants", plantController.addPlant);


// ================= PUT =================

router.put("/plants/:id", plantController.updatePlant);


// ================= DELETE =================

router.delete("/plants/:id", plantController.deletePlant);


module.exports = router;