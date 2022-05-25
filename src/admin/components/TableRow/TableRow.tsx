import React from "react";
import moment from "moment";

import { TableRowStyle } from "./TableRow.style";
import { useState } from "@storybook/addons";

type TableRowProps = {
  rowLabel3?: string;
  reservation?: any;
};

const TableRow = (props: TableRowProps) => {
  const { rowLabel3, reservation } = props;
  console.log("reservationahan!",reservation)
  return (
    <TableRowStyle>
      <span>
        <h1 className="heading">
          {/* 10:51 AM */}
          {moment(reservation && reservation.eventInfo[0].startingTime, [
            "hh:mm",
          ]).format("hh:mm a")}
        </h1>
        <p className="subheading">
          {moment(reservation && reservation.eventInfo[0].date).format("MMMM") +
            " " +
            moment(reservation && reservation.eventInfo[0].date).date() +
            ", " +
            new Date(
              reservation && reservation.eventInfo[0].date
            ).getFullYear()}
        </p>
      </span>

      <span>
        <h1 className="heading">
          {reservation && reservation.eventInfo[0].title}
        </h1>
        <p className="subheading">
          {reservation && ''}
        </p>
      </span>

      <span>
        <h1 className="credits">{rowLabel3}</h1>
      </span>
    </TableRowStyle>
  );
};

export default TableRow;
