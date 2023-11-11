// src/controllers/apartmentController.ts
import { Request, Response } from 'express';
import Apartment, { IApartment } from '../models/Apartment';

export const getAllApartments = async (req: Request, res: Response): Promise<void> => {
  try {
    const apartments: IApartment[] = await Apartment.find();
    res.status(200).json({ apartments });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred.' });
    }
  }
};

export const getApartmentDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const apartment: IApartment | null = await Apartment.findById(req.params.id);
    if (!apartment) {
      res.status(404).json({ message: 'Apartment not found' });
      return;
    }
    res.status(200).json({ apartment });
  } catch (error) {
    res.status(500).json({ error: 'An unknown error occurred.' });
  }
};

export const addApartment = async (req: Request, res: Response): Promise<void> => {
  try {
    const newApartment: IApartment = req.body;
    const apartment: IApartment = await Apartment.create(newApartment);
    res.status(201).json({ apartment });
  } catch (error) {
    res.status(500).json({ error: 'An unknown error occurred.' });
  }
  
};
