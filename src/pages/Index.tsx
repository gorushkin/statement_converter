import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useState } from 'react';

export const IndexPage = () => {
  console.log('index');

  const [file, setFile] = useState<File | null>(null);

  console.log('file: ', file);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFile(file);

    const reader = new FileReader();
  };

  return (
    <Container>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        minHeight='100vh'
      >
        <Typography variant='h4' gutterBottom>
          Загрузка файла
        </Typography>
        <input
          accept='.xlsx'
          style={{ display: 'none' }}
          id='raised-button-file'
          type='file'
          onChange={handleFileChange}
        />
        <label htmlFor='raised-button-file'>
          <Button variant='contained' component='span'>
            Выберите файл
          </Button>
        </label>
        {file && (
          <Typography variant="body1" style={{ marginTop: 16 }}>
            Выбранный файл: {file.name}
          </Typography>
        )}
        <Button variant='contained' color='primary' style={{ marginTop: 16 }}>
          Загрузить
        </Button>
      </Box>
    </Container>
  );
};
