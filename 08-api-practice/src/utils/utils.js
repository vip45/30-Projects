export const groupChargesByType = (data) => {
  const bounceCodes = ["8"];
  const lppCodes = ["7"];
  const otherCodes = [
    "841",
    "265",
    "612",
    "35",
    "563",
    "608",
    "827",
    "828",
    "660",
    "609",
  ];

  const grouped = {
    bounce: [],
    lpp: [],
    other: [],
  };

  data.forEach((item) => {
    const code = String(item.chargeCode); 

    if (bounceCodes.includes(code)) {
      grouped.bounce.push(item);
    } else if (lppCodes.includes(code)) {
      grouped.lpp.push(item);
    } else if (otherCodes.includes(code)) {
      grouped.other.push(item);
    }
  });

  return grouped;
};
export const calculateTotals = (data) => {
  let totalAdvice = 0;
  let totalAllocated = 0;

  data.forEach((item) => {
    totalAdvice += Number(item.adviceAmt);
    totalAllocated += Number(item.allocatedAmt);
  });

  return {
    totalAmount: totalAdvice,
    paidAmount: totalAllocated,
    unpaidAmount: totalAdvice - totalAllocated,
  };
};
