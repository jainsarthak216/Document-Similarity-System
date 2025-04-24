// src/processors/TextProcessor.ts
export class TextProcessor {
    private static stopwords = new Set([
      'a', 'an', 'the', 'and', 'or', 'but', 'is', 'are', 'of', 
      'to', 'in', 'that', 'it', 'on', 'for', 'as', 'with', 'by'
    ]);
  
    static preprocess(text: string): string[] {
      return text
        .toLowerCase()
        .replace(/[^\w\s]/g, '') // Remove punctuation
        .split(/\s+/) // Split on whitespace
        .filter(word => 
          word.length > 2 && 
          !this.stopwords.has(word)
        );
    }
  }