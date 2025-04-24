import * as fs from 'fs';
import { SimilarityEngine } from './algorithms/SimilarityEngine';

const compareDocuments = (file1: string, file2: string) => {
  try {
    const doc1 = fs.readFileSync(file1, 'utf-8');
    const doc2 = fs.readFileSync(file2, 'utf-8');

    // Get all comparison results at once
    const results = SimilarityEngine.compareDocuments(doc1, doc2);

    console.log('Document Similarity Results:\n');
    console.log(`Comparing:\n- ${file1}\n- ${file2}\n`);
    
    results.forEach(result => {
      console.log(
        `Method: ${result.method.padEnd(8)}` +
        `Score: ${result.score.toFixed(3)}`.padStart(15) +
        `Time: ${result.executionTimeMs}ms`.padStart(15)
      );
    });

  } catch (error) {
    console.error('Error comparing documents:');
    if (error instanceof Error) {
      console.error(error.message);
    }
    process.exit(1);
  }
};

// Command-line execution
const [,, file1, file2] = process.argv;
if (file1 && file2) {
  compareDocuments(file1, file2);
} else {
  console.error('Usage: ts-node src/index.ts <file1> <file2>');
  console.error('Example: ts-node src/index.ts doc1.txt doc2.txt');
  process.exit(1);
}