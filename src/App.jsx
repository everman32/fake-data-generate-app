import React, { useState } from "react";
import { Container } from "react-bootstrap";
import generateData from "./data-generator";
import Table from "./components/table";
import TableStyle from "./components/table-style";

function App() {
  const [items, setItems] = useState(generateData(40));
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

  const getMoreData = () => {
    setTimeout(() => {
      setItems(items.concat(generateData(20)));
    }, 1500);
  };

  const data = React.useMemo(() => items, [items]);

  return (
    <Container>
      <TableStyle>
        <Table columns={columns} data={data} update={getMoreData} />
      </TableStyle>
    </Container>
  );
}

export default App;
