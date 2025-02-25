import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Tabs, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../config/mui-config';
import { Table } from '../table/table';

// Styled komponentlarni yaratish
const CustomTab = styled(Tab)`
  background-color: ${(props) => (props.selected ? '#618C78' : 'inherit')};
  color: ${(props) => (props.selected ? 'white !important' : 'black')};
  &:hover {
    background-color: ${(props) => (props.selected ? '#618C78' : '#f0f0f0')};
  }
`;

const CustomTabIndicator = styled.div`
  background-color: ${theme.palette.primary.main};
  height: 4px;
`;

export default function LabTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        variant="fullWidth"
        TabIndicatorProps={{
          children: <CustomTabIndicator />,
        }}
      >
        <CustomTab value="one" label="Характеристики" selected={value === 'one'} />
        <CustomTab value="two" label="Купить в рассрочку" selected={value === 'two'} />
        <CustomTab value="three" label="Отзывы" selected={value === 'three'} />
        <CustomTab value="four" label="Написать отзыв" selected={value === 'four'} />
      </Tabs>

      {/* Tanlangan tabga qarab ma'lumotlarni ko'rsatish */}
      <Box p={"10px"}>
        {value === 'one' && <Table />}
        {value === 'two' && <Typography>Купить в рассрочку uchun ma'lumotlar</Typography>}
        {value === 'three' && <Typography>Отзывы uchun ma'lumotlar</Typography>}
        {value === 'four' && <Typography>Написать отзыв uchun ma'lumotlar</Typography>}
      </Box>
    </Box>
  );
}
