import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/',(req,res) => {
    res.json({
        nameapp: "backend_app"
    })
})

export default app;