import React, { useMemo, useState } from "react";

import { Dashboard, NewPaymentMethod, PaymentInfoContent, PaymentMethod } from "../../components";
import { PaymentInfoStyle } from "./PaymentInfo.style";

export default function PaymentInfo() {
  const [currentPage, setCurrentPage] = useState("info-content");

  const CurrentPage = useMemo(() => {
    switch (currentPage) {
      case "info-content":
        return <PaymentInfoContent setCurrentPage={setCurrentPage} />;

      case "payment-method":
        return <PaymentMethod setCurrentPage={setCurrentPage} />;

      case "new-payment-method":
        return <NewPaymentMethod setCurrentPage={setCurrentPage} />;
      default:
        return <PaymentInfoContent setCurrentPage={setCurrentPage} />;
    }
  }, [currentPage]);
  return (
    <Dashboard>
      <PaymentInfoStyle>{CurrentPage}</PaymentInfoStyle>
    </Dashboard>
  );
}
