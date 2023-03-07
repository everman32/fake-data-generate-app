import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import dataGenerator from "./data-generator";
import Table from "./components/table";
import TableStyle from "./components/table-style";

function App() {
  const [seed, setSeed] = useState();
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
      <Form.Control
        className="mt-3"
        placeholder="Enter seed..."
        value={seed}
        onChange={(e) => setSeed(e.target.value)}
      />
      <Button>Set seed</Button>
      <TableStyle>
        <Table columns={columns} data={data} update={fetchMoreData} />
      </TableStyle>
    </Container>
  );
}

export default App;
