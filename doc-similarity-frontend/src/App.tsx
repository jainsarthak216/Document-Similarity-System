import { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import FileUploader from './components/FileUploader';
import ResultsViewer from './components/ResultsViewer';
import { compareDocuments } from './services/api';

export default function App() {
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleCompare = async (files: File[]) => {
    try {
      setError(null); // Clear any previous errors
      const data = await compareDocuments(files);
      setResults(data);
    } catch (err) {
      console.error('Error comparing documents:', err);
      setError('Failed to compare documents. Please try again.');
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Document Similarity Checker
      </Typography>
      
      <FileUploader onCompare={handleCompare} />
      
      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
      
      {results.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <ResultsViewer results={results} />
        </Box>
      )}
    </Container>
  );
}