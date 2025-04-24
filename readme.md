# Document Similarity System

A Node.js/TypeScript system that computes similarity scores (0-1) between text documents using multiple algorithms.

## 🚀 Features

- **Three comparison methods**:
  - Cosine Similarity (TF-IDF vectors)
  - Jaccard Similarity (word overlap)
  - MinHash (approximate similarity)
- **Clean preprocessing**: Stopword removal, punctuation stripping, case normalization
- **Performance metrics**: Execution time for each algorithm
- **CLI interface**: Easy command-line usage

## 📦 Prerequisites

- Node.js v16+
- npm or yarn

## 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/doc-similarity.git
   cd doc-similarity
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## 💻 Usage

### Basic CLI Usage

```bash
npx ts-node src/index.ts <file1> <file2>
```

### Example

```bash
npx ts-node src/index.ts sample-docs/doc1.txt sample-docs/doc2.txt
```

### Sample Output

```
Document Similarity Results:

Comparing:
- sample-docs/doc1.txt
- sample-docs/doc2.txt

Method: cosine  Score: 0.725  Time: 0.45ms  
Method: jaccard Score: 0.667  Time: 0.32ms  
Method: minhash Score: 0.500  Time: 0.28ms  
```

## 📝 Adding Your Documents

- Place your `.txt` files in the `sample-docs/` directory.
- Run comparisons using the CLI as shown above.

## 📁 Project Structure

```
doc-similarity/
├── src/
│   ├── algorithms/      # Similarity calculation logic
│   ├── processors/      # Text preprocessing
│   └── index.ts         # CLI entry point
├── sample-docs/         # Example documents
├── package.json
└── README.md
```

## ⚙️ Advanced Configuration

You can define environment variables in a `.env` file:

```ini
# Minimum word length to consider
MIN_WORD_LENGTH=3

# Maximum execution time (ms)
MAX_EXECUTION_TIME=5000
```

## 🧪 Running Tests

```bash
npm test
```

## 🛠 Troubleshooting

- **Error: "File not found"**
  - Verify file paths are correct.
  - Ensure files have a `.txt` extension.

- **Error: TypeScript compilation issues**
  - Try cleaning and reinstalling:

    ```bash
    rm -rf node_modules package-lock.json
    npm install
    ```

## 📄 License

MIT

## 🙋 Support

For issues or questions, please [open an issue](https://github.com/yourusername/doc-similarity/issues).