import React, {useState} from 'react'
import styles from './styles.module.css'
import Pagination, { paginationClasses } from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export const ExampleComponent = (props) => {

  const [page, setPage] = useState('');

  const handleChange = (event, value) => {
    console.log(value)
    props.hello(value)
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={props.total} onChange={handleChange} showFirstButton showLastButton/>
    </Stack>
  );
}
