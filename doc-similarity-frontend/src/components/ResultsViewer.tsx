import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function ResultsViewer({ results }: { 
  results: Array<{
    method: string;
    score: number;
    executionTimeMs: number;
  }>
}) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Method</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right">Time (ms)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((row) => (
            <TableRow key={row.method}>
              <TableCell>{row.method}</TableCell>
              <TableCell align="right">{row.score.toFixed(3)}</TableCell>
              <TableCell align="right">{row.executionTimeMs.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}