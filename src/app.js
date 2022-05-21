import express from "express";
import morgan from "morgan";
import cors from "cors";

import vehicleRoute from './routes/vehicle.routes'
import ownerRoute from './routes/owner.routes'
import taxeRoute from './routes/taxe.routes'


const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    nameapp: "backend_app",
    test: "Hello world from express",
  });
});

app.use('/api/vehicle',vehicleRoute)
app.use('/api/owner',ownerRoute)
app.use('/api/taxe',taxeRoute)
export default app;
