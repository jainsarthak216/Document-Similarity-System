// types/minhash.d.ts
declare module 'minhash' {
    class MinHash {
      constructor(config?: { numPerm?: number });
      update(str: string): void;
      jaccard(other: MinHash): number;
    }
    export = MinHash;
  }