// interfaces/Document.ts
export interface DocumentSimilarityResult {
    similarity: number;
    method: 'cosine' | 'jaccard' | 'minhash';
    executionTime: number;
  }