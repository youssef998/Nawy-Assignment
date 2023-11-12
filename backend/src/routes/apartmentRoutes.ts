// Import necessary modules and packages
import express from 'express';
import { getAllApartments, getApartmentDetails, addApartment } from '../controller/apartmentController';

// Create an Express router
const router = express.Router();

/**
 * @route GET /api/apartments
 * @description Get all apartments
 * @access Public
 */
router.get('/apartments', getAllApartments);

/**
 * @route GET /api/apartments/:id
 * @description Get details of a specific apartment
 * @access Public
 */
router.get('/apartments/:id', getApartmentDetails);

/**
 * @route POST /api/apartments
 * @description Add a new apartment
 * @access Public
 */
router.post('/apartments', addApartment);

// Export the router for use in other files
export default router;
