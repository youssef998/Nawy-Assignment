// src/controllers/apartmentController.ts

import { Request, Response } from 'express';
import Apartment, { IApartment } from '../models/Apartment';

/**
 * Get all apartments
 * @route GET /api/apartments
 * @param req - Express request object
 * @param res - Express response object
 * @returns {Promise<void>}
 */
export const getAllApartments = async (req: Request, res: Response): Promise<void> => {
  try {
    // Fetch all apartments from the database
    const apartments: IApartment[] = await Apartment.find();
    // Respond with a JSON array of apartments
    res.status(200).json({ apartments });
  } catch (error) {
    // Handle errors and respond with an appropriate status code and error message
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred.' });
    }
  }
};

/**
 * Get details of a specific apartment by ID
 * @route GET /api/apartments/:id
 * @param req - Express request object with the apartment ID as a URL parameter
 * @param res - Express response object
 * @returns {Promise<void>}
 */
export const getApartmentDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    // Find an apartment by its ID
    const apartment: IApartment | null = await Apartment.findById(req.params.id);
    // If the apartment is not found, respond with a 404 status code and a message
    if (!apartment) {
      res.status(404).json({ message: 'Apartment not found' });
      return;
    }
    // Respond with the details of the found apartment
    res.status(200).json({ apartment });
  } catch (error) {
    // Handle errors and respond with an appropriate status code and error message
    res.status(500).json({ error: 'An unknown error occurred.' });
  }
};

/**
 * Add a new apartment
 * @route POST /api/apartments
 * @param req - Express request object with the new apartment data in the request body
 * @param res - Express response object
 * @returns {Promise<void>}
 */
export const addApartment = async (req: Request, res: Response): Promise<void> => {
  try {
    // Extract the new apartment data from the request body
    const newApartment: IApartment = req.body;
    // Create a new apartment in the database
    const apartment: IApartment = await Apartment.create(newApartment);
    // Respond with the details of the newly created apartment
    res.status(201).json({ apartment });
  } catch (error) {
    // Handle errors and respond with an appropriate status code and error message
    res.status(500).json({ error: 'An unknown error occurred.' });
  }
};
