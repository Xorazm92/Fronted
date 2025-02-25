import styled from "@emotion/styled";

const TableContainer = styled.div`
  max-width: 398px;
  margin-bottom: 30px
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 35px 16px 0;
  border-bottom: 1.46px solid rgba(0, 0, 0, 0.5);;
`;

const TableLabel = styled.div`
font-weight: 700;
font-size: 18px;
line-height: 140%;
color: #1d1d1d;
`;

const TableValue = styled.div`
font-weight: 400;
font-size: 18px;
line-height: 140%;
color: #1d1d1d;
`;

 export const Table = () => {
  return (
    <TableContainer>
      <TableRow>
        <TableLabel>Материал</TableLabel>
        <TableValue>Бамбук</TableValue>
      </TableRow>
      <TableRow>
        <TableLabel>Толщина</TableLabel>
        <TableValue>6 мм</TableValue>
      </TableRow>
      <TableRow>
        <TableLabel>Вес</TableLabel>
        <TableValue>1.6 кг/м² (+/- 1%)</TableValue>
      </TableRow>
      <TableRow>
        <TableLabel>Плотность</TableLabel>
        <TableValue>504 000 узлов/м²</TableValue>
      </TableRow>
      <TableRow>
        <TableLabel>Производитель</TableLabel>
        <TableValue>Yusuf Hali</TableValue>
      </TableRow>
      <TableRow>
        <TableLabel>Страна</TableLabel>
        <TableValue>Турция</TableValue>
      </TableRow>
    </TableContainer>
  );
};