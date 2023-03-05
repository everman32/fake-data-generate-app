import React, { useState } from "react";
import styled from "styled-components";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import dataGenerator from "./data-generator";
import Table from "./components/table";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

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
      <Styles>
        <Table columns={columns} data={data} update={fetchMoreData} />
      </Styles>
    </Container>
  );
}

export default App;
