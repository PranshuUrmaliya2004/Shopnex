import express from 'express' 
import cors from 'cors'
import 'dotenv/config';
import Connectdb from './Config/mongodb.js';
import ConnectCloudinary from './Config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';


// App config
const app = express();
const port = process.env.PORT || 4000;

Connectdb();
ConnectCloudinary();

// middleware
app.use(express.json());   // ✅ FIXED
app.use(cors());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.listen(port, () => console.log('server Started on port:' + port));
