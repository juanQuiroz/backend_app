import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import vehicleRoute from './routes/vehicle.routes'

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/',(req,res) => {
    res.json({
        nameapp: "backend_app"
    })
})

app.use('/api/vehicle',vehicleRoute)

export default app;