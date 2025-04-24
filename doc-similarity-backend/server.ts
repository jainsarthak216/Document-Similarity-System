import express, { Request, Response } from 'express';
import multer from 'multer';
import cors from 'cors';
import fs from 'fs';
import { SimilarityEngine } from './src/algorithms/SimilarityEngine';

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());

// Extend the Request interface to include the `files` property
// interface MulterRequest extends Request {
//   files: Express.Multer.File[];
// }

app.post('/compare', upload.array('files'), (req: any, res: any) => {
  try {
    const files = req.files;
    if (!files || files.length < 2) {
      return res.status(400).json({ error: 'Two files are required for comparison' });
    }

    const doc1 = fs.readFileSync(files[0].path, 'utf-8');
    const doc2 = fs.readFileSync(files[1].path, 'utf-8');

    const results = SimilarityEngine.compareDocuments(doc1, doc2);
    res.json(results);
  } catch (error) {
    console.error('Error during comparison:', error);
    res.status(500).json({ error: 'Comparison failed' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});