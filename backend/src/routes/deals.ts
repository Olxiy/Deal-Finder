import { Request, Response, Router } from 'express';
import { sampleDeals } from '../data/data';
import { filterAndSortDeals } from '../services/filter';
import { FilterCriteria } from '../types';
import { getAllCategories } from '../utils';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  try {
    const allCategories = getAllCategories(sampleDeals);
    res.json(allCategories);
  } catch (error) {
    console.error('Error response category:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

router.post('/filter', (req: Request, res: Response) => {
  try {
    const criteria: FilterCriteria = req.body;

    const results = filterAndSortDeals(sampleDeals, criteria);
    res.json(results);
  } catch (error) {
    console.error('Error filtering deals:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

export default router;
