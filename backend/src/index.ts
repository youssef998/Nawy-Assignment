// Import necessary modules and packages
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import apartmentRoutes from './routes/apartmentRoutes';

// Load environment variables from a .env file
dotenv.config();

// Enable CORS for all routes
import cors from 'cors';

// Create an Express application
const app = express();

// Set the port for the server to listen on
const PORT = process.env.PORT || 3001;

// Enable CORS middleware
app.use(cors());

// MongoDB connection URI
const mongoURI = 'mongodb+srv://admin:admin@cluster0.hxzpely.mongodb.net/Nawy';

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Use JSON parsing middleware for incoming requests
app.use(express.json());

// Set up routes for the '/api' endpoint
app.use('/api', apartmentRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
