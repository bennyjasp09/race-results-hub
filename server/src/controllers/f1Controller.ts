import { Request, Response } from 'express';
import F1Result from '../models/F1Result';

export const getAllResults = async (req: Request, res: Response): Promise<void> => {
  try {
    const results = await F1Result.find();
    res.json(results);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ message: error.message });
  }
};
