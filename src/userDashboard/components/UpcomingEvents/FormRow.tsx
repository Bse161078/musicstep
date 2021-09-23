import React from "react";

import { FormRowStyle } from "./UpcomingEvents.style";

const FormRow = () => {
  return (
    <FormRowStyle>
      <img src="/images/sample.png" className="thumbnail" alt="thumbnail" />

      <div className="table-cell">
        <h2 className="heading">10:51 AM</h2>
        <span className="description">1 Hour</span>
      </div>

      <div className="table-cell">
        <h2 className="heading">Franklin Kub's Concert</h2>
        <span className="description">Alternative, Classical</span>
      </div>

      <div>Kreiger - Herman Club</div>
    </FormRowStyle>
  );
};

export default FormRow;
