import { Router } from 'express';
import multer from 'multer';
import {
  getEvidenceList,
  uploadEvidence,
  deleteEvidence
} from '../controllers/evidenceController.js';

const router = Router();

// Setup Multer (Memory Storage, limit 50MB per file)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024 // 50 Megabytes
  }
});

router.get('/', getEvidenceList);
router.post('/', upload.single('file'), uploadEvidence);
router.delete('/:id', deleteEvidence);
router.delete('/', deleteEvidence); // mendukung ?id=...

export default router;
