// src/algorithms/SimilarityEngine.ts
import { TextProcessor } from '../processors/TextProcessor';
import { createHash } from 'crypto';

type SimilarityResult = {
  score: number;
  method: 'cosine' | 'jaccard' | 'minhash';
  executionTimeMs: number;
};

export class SimilarityEngine {
  /**
   * Compare two documents using multiple algorithms
   */
  static compareDocuments(doc1: string, doc2: string): SimilarityResult[] {
    const results: SimilarityResult[] = [];
    const methods: ('cosine' | 'jaccard' | 'minhash')[] = ['cosine', 'jaccard', 'minhash'];

    methods.forEach(method => {
      const start = performance.now();
      let score: number;

      switch (method) {
        case 'cosine':
          score = this.cosineSimilarity(doc1, doc2);
          break;
        case 'jaccard':
          score = this.jaccardSimilarity(doc1, doc2);
          break;
        case 'minhash':
          score = this.minHashSimilarity(doc1, doc2);
          break;
      }

      results.push({
        score: parseFloat(score.toFixed(3)),
        method,
        executionTimeMs: parseFloat((performance.now() - start).toFixed(2))
      });
    });

    return results;
  }

  /**
   * Cosine Similarity using TF-IDF vectors
   */
  private static cosineSimilarity(doc1: string, doc2: string): number {
    const vec1 = this.getTfIdfVector(doc1);
    const vec2 = this.getTfIdfVector(doc2);
    
    // Get all unique terms from both documents
    const allTerms = new Set([...Object.keys(vec1), ...Object.keys(vec2)]);
    
    let dotProduct = 0;
    let mag1 = 0;
    let mag2 = 0;

    allTerms.forEach(term => {
      const v1 = vec1[term] || 0;
      const v2 = vec2[term] || 0;
      
      dotProduct += v1 * v2;
      mag1 += v1 * v1;
      mag2 += v2 * v2;
    });

    const magnitude = Math.sqrt(mag1) * Math.sqrt(mag2);
    return magnitude > 0 ? dotProduct / magnitude : 0;
  }

  /**
   * Jaccard Similarity using word sets
   */
  private static jaccardSimilarity(doc1: string, doc2: string): number {
    const set1 = new Set(TextProcessor.preprocess(doc1));
    const set2 = new Set(TextProcessor.preprocess(doc2));
    
    const intersection = new Set([...set1].filter(x => set2.has(x))).size;
    const union = new Set([...set1, ...set2]).size;
    
    return union > 0 ? intersection / union : 0;
  }

  /**
   * MinHash approximation for large documents
   */
  private static minHashSimilarity(doc1: string, doc2: string): number {
    const getMinHash = (text: string) => {
      const tokens = TextProcessor.preprocess(text);
      const hashValues = tokens.map(token => 
        parseInt(createHash('sha1').update(token).digest('hex').substring(0, 8), 16)
      );
      return Math.min(...hashValues);
    };

    const hash1 = getMinHash(doc1);
    const hash2 = getMinHash(doc2);
    
    return hash1 === hash2 ? 1 : 0.5; // Simplified version
  }

  /**
   * Helper: Generate TF-IDF vector for a document
   */
  private static getTfIdfVector(text: string): Record<string, number> {
    const tokens = TextProcessor.preprocess(text);
    const tf: Record<string, number> = {};
    
    // Term Frequency
    tokens.forEach(token => {
      tf[token] = (tf[token] || 0) + 1;
    });

    // Normalize TF
    const maxFreq = Math.max(...Object.values(tf));
    Object.keys(tf).forEach(term => {
      tf[term] = tf[term] / maxFreq;
    });

    return tf;
  }
}