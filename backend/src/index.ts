import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import apartmentRoutes from './routes/apartmentRoutes';
dotenv.config();
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
const mongoURI = 'mongodb+srv://admin:admin@cluster0.hxzpely.mongodb.net/Nawy';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use(express.json());


app.use('/api', apartmentRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




