import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Box, Typography } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';

export default function FileUploader({ onCompare }: { 
  onCompare: (files: File[]) => void 
}) {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles.slice(0, 2));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'text/plain': ['.txt'] },
    maxFiles: 2
  });

  return (
    <Box sx={{ textAlign: 'center', p: 4 }}>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <UploadIcon fontSize="large" />
        <Typography>Drag & drop 2 text files</Typography>
        <Button variant="outlined" sx={{ mt: 2 }}>
          Select Files
        </Button>
      </div>
      
      {files.length === 2 && (
        <Button 
          variant="contained" 
          sx={{ mt: 3 }}
          onClick={() => onCompare(files)}
        >
          Compare Documents
        </Button>
      )}
    </Box>
  );
}