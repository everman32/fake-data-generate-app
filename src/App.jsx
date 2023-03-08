import React, { useState, useCallback, useMemo } from "react";
import { Container } from "react-bootstrap";
import generateData from "./data-generator";
import Table from "./components/table";
import TableStyle from "./components/table-style";

const INITIAL_RECORDS_COUNT = 40;
const ADDITIONAL_RECORDS_COUNT = 20;

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

const initialData = generateData(INITIAL_RECORDS_COUNT);

function App() {
  const [items, setItems] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const getMoreData = useCallback(() => {
    setIsLoading(true);
    requestAnimationFrame(() => {
      setItems((prevItems) => [
        ...prevItems,
        ...generateData(ADDITIONAL_RECORDS_COUNT),
      ]);
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
