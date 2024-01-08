import DataTable from "react-data-table-component";

function Table() {
  const columns = [
    {
      name: "Order Id",
      selector: (row) => row.title,
    },
    {
      name: "Order Date",
      selector: (row) => row.year,
    },
    {
        name: "Order Amount",
        selector: (row) => row.year,
      },
      {
        name: "Transaction Fees",
        selector: (row) => row.year,
      },
  ];

  const data = [
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22"
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
}

export default Table;
