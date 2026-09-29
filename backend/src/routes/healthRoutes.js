import { Router } from 'express';
import { testConnection } from '../config/db.js';

const router = Router();

router.get('/', async (req, res) => {
  const dbStatus = await testConnection();
  res.json({
    status: 'ok',
    service: 'eval-pemdi-backend',
    timestamp: new Date().toISOString(),
    database: dbStatus
  });
});

export default router;
