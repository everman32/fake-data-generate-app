import React, { useState, useCallback, useMemo } from "react";
import { Container } from "react-bootstrap";
import generateData from "./data-generator";
import Table from "./components/table";
import TableStyle from "./components/table-style";

const columns = [
  {
    Header: "UUID",
    accessor: "uuid",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Address",
    accessor: "address",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
];

const initialData = generateData(40);

function App() {
  const [items, setItems] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const getMoreData = useCallback(() => {
    setIsLoading(true);
    requestAnimationFrame(() => {
      setItems((prevItems) => [...prevItems, ...generateData(20)]);
      setIsLoading(false);
    });
  }, []);

  const data = useMemo(() => items, [items]);

  return (
    <Container>
      <TableStyle>
        <Table columns={columns} data={data} update={getMoreData} />
        {isLoading && <div>Loading...</div>}
      </TableStyle>
    </Container>
  );
}

export default App;
