import React, { useMemo, useState } from "react";
import CommonPopup from "./CommonPopup";
import Charges from "./Charges";
import { groupChargesByType, calculateTotals } from "../utils/utils";
import apiData from "../data/api.json";

const Overview = () => {
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");

  const responseData = useMemo(() => {
    if (apiData.header?.status !== "SUCCESS") {
      console.error("Header Failed");
      return [];
    }

    if (apiData.body?.retStatus !== "SUCCESS") {
      console.error(apiData.body?.errorMessage || "Body Error");
      return [];
    }

    return apiData.body.response || [];
  }, []);

  const grouped = useMemo(() => {
    return groupChargesByType(responseData);
  }, [responseData]);

  const { bounce = [], lpp = [], other = [] } = grouped || {};

  const overallTotal = calculateTotals(responseData);
  const bounceTotal = calculateTotals(bounce);
  const lppTotal = calculateTotals(lpp);
  const otherTotal = calculateTotals(other);

  return (
    <div className="overview">
      <div className="overview-total">
        <div className="total-main">
          <h5>Total Amount</h5>
          <p>₹ {overallTotal.totalAmount}</p>
        </div>
        <div className="total-main">
          <h5>Total Paid</h5>
          <p>₹ {overallTotal.paidAmount}</p>
        </div>
        <div className="total-main">
          <h5>Total Unpaid</h5>
          <p>₹ {overallTotal.unpaidAmount}</p>
        </div>
      </div>
      <div className="overview-main">
        <div className="overview-strip">
          <div className="strip-content">
            <p>Bounce Charge</p>
            <p>Paid Amount: ₹ {bounceTotal.paidAmount}</p>
            <p>Unpaid Amount: ₹ {bounceTotal.unpaidAmount}</p>
          </div>
          <div className="strip-btn">
            <button
              onClick={() => {
                setSelectedData(grouped.bounce);
                setSelectedTitle("Bounce Charges");
                setOpen(true);
              }}
            >
              View
            </button>
          </div>
        </div>
        <div className="overview-strip">
          <div className="strip-content">
            <p>Late Payment Charge</p>
            <p>Paid Amount: ₹ {lppTotal.paidAmount}</p>
            <p>Unpaid Amount: ₹ {lppTotal.unpaidAmount}</p>
          </div>
          <div className="strip-btn">
            <button
              onClick={() => {
                setSelectedData(grouped.lpp);
                setSelectedTitle("Late Payments Charges");
                setOpen(true);
              }}
            >
              View
            </button>
          </div>
        </div>
        <div className="overview-strip">
          <div className="strip-content">
            <p>Other Charge</p>
            <p>Paid Amount: ₹ {otherTotal.paidAmount}</p>
            <p>Unpaid Amount: ₹ {otherTotal.unpaidAmount}</p>
          </div>
          <div className="strip-btn">
            <button
              onClick={() => {
                setSelectedData(grouped.other);
                setSelectedTitle("Other Charges");
                setOpen(true);
              }}
            >
              View
            </button>
          </div>
        </div>
      </div>

      <CommonPopup
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={{
          xs: "95%",
          sm: "90%",
          md: "90%",
          lg: "90%",
          xl: "80%",
          xxl: "60%",
        }}
        centered
      >
        <Charges data={selectedData} title={selectedTitle} />
      </CommonPopup>
    </div>
  );
};

export default Overview;
