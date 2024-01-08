import DataTable from "react-data-table-component";

function Table() {
  const columns = [
    {
      name: "Order Id",
      selector: (row) => row.id,
    },
    {
      name: "Order Date",
      selector: (row) => row.date,
    },
    {
      name: "Order Amount",
      selector: (row) => row.amount,
    },
    {
      name: "Transaction Fees",
      selector: (row) => row.fees,
    },
  ];

  const data = [
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22",
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
}

export default Table;
