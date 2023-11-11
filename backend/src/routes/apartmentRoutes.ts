import express from 'express';
import { getAllApartments, getApartmentDetails, addApartment } from '../controller/apartmentController';

const router = express.Router();

router.get('/apartments', getAllApartments);
router.get('/apartments/:id', getApartmentDetails);
router.post('/apartments', addApartment);

export default router;
