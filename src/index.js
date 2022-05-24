import React, {useState} from 'react'
import styles from './styles.module.css'
import Pagination, { paginationClasses } from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export const PaginationGeneric = (props) => {

  const [page, setPage] = useState('');

  const handleChange = (event, value) => {
    console.log(value)
    props.hello(value)
    setPage(value);
  };

  return (
    <Stack>
      <Pagination count={props.total} onChange={handleChange} showFirstButton showLastButton variant="outlined" color="primary" size="large"/>
    </Stack>
  );
}
