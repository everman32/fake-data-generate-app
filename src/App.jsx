import React, { useState } from "react";
import { Container } from "react-bootstrap";
import dataGenerator from "./data-generator";
import Table from "./components/table";
import TableStyle from "./components/table-style";

function App() {
  const [items, setItems] = useState(dataGenerator(40));
  const columns = React.useMemo(
    () => [
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
    ],
    []
  );

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems(items.concat(dataGenerator(20)));
    }, 1500);
  };

  const data = React.useMemo(() => items, [items]);

  return (
    <Container>
      <TableStyle>
        <Table columns={columns} data={data} update={fetchMoreData} />
      </TableStyle>
    </Container>
  );
}

export default App;
