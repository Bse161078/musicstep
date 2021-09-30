import React from "react";

import { TableRowStyle } from "./TableRow.style";

type TableRowProps = {
  rowLabel3?: string;
};

const TableRow = (props: TableRowProps) => {
  const { rowLabel3 } = props;

  return (
    <TableRowStyle>
      <span>
        <h1 className="heading">10:51 AM</h1>
        <p className="subheading">July 24, 2021</p>
      </span>

      <span>
        <h1 className="heading">Franklin Kub's Concert</h1>
        <p className="subheading">Venue Name Here</p>
      </span>

      <span>
        <h1 className="credits">{rowLabel3}</h1>
      </span>
    </TableRowStyle>
  );
};

export default TableRow;
