import { Table } from "antd";
import React, { useMemo } from "react";
import { calculateTotals } from "../utils/utils";

const Charges = ({ data, title }) => {
  const sortedData = useMemo(() => {
    return [...data].sort(
      (a, b) => new Date(b.adviceDate) - new Date(a.adviceDate),
    );
  }, [data]);
  const dataSource = sortedData.map((item, index) => ({
    key: index,
    date: new Date(item.adviceDate).toLocaleDateString("en-GB"),
    description: item.chargeDescription,
    chargeAmount: Number(item.adviceAmt),
    paidAmount: Number(item.allocatedAmt),
    unpaidCharges: Number(item.adviceAmt) - Number(item.allocatedAmt),
  }));

  const totals = calculateTotals(data);

  const columns = [
    {
      title: "Transaction Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Charge Amount",
      dataIndex: "chargeAmount",
      key: "chargeAmount",
      render: (amount) => `₹ ${amount}`,
    },
    {
      title: "Paid Amount",
      dataIndex: "paidAmount",
      key: "paidAmount",
      render: (amount) => `₹ ${amount}`,
    },
    {
      title: "Unpaid Charges",
      dataIndex: "unpaidCharges",
      key: "unpaidCharges",
      render: (amount) => `₹ ${amount}`,
    },
  ];
  return (
    <div className="charges">
      <div className="charges-header">
        <h3>{title}</h3>
        <div className="charges-content">
          <div>
            <h4>Paid Amount</h4>
            <p>₹ {totals.paidAmount}</p>
          </div>
          <div>
            <h4>Unpaid Charges</h4>
            <p>₹ {totals.unpaidAmount}</p>
          </div>
        </div>
      </div>

      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        scroll={{ y: "60vh", x: "max-content" }}
      />
    </div>
  );
};

export default Charges;
