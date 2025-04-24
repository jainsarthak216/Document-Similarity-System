import { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import FileUploader from './components/FileUploader';
import ResultsViewer from './components/ResultsViewer';

export default function App() {
  const [results, setResults] = useState<any[]>([]);

  // Simulate API call for testing
  const handleCompare = () => {
    setResults([
      { method: 'cosine', score: 0.75, executionTimeMs: 42 },
      { method: 'jaccard', score: 0.68, executionTimeMs: 35 }
    ]);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Document Similarity Checker
      </Typography>
      
      <FileUploader onCompare={handleCompare} />
      
      {results.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <ResultsViewer results={results} />
        </Box>
      )}
    </Container>
  );
}