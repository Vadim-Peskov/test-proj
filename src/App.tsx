import React, { FC } from 'react';
import './App.css';
import AntdTable from './components/AntdTable';
import Container from './components/Container';

const App: FC = () => {
  return (
    <Container>
      <AntdTable />
    </Container>
  )
}
export default App;