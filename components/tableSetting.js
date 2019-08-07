import React from "react";
import { coinNameKR } from "./coinName";

/* Theme Setting */
const darkTheme = {
  title: {
    fontSize: "22px",
    fontColor: "#FFFFFF",
    backgroundColor: "#363640"
  },
  contextMenu: {
    backgroundColor: "#E91E63",
    fontColor: "#FFFFFF"
  },
  header: {
    fontSize: "12px",
    fontColor: "#FFFFFF",
    backgroundColor: "#363640"
  },
  rows: {
    fontColor: "#FFFFFF",
    backgroundColor: "#363640",

    hoverFontColor: "black",
    hoverBackgroundColor: "rgba(0, 0, 0, .24)"
  },
  cells: {
    cellPadding: "10px"
  }
};

/* Columns Setting */
const columns = [
  {
    selector: "key",
    sortable: true,
    ignoreRowClick: true,
    width: "20%",
    cell: row => {
      function getKeyByValue(object, row) {
        // Data from coinName.js Object
        return object[row]; // Returns Korean Coin Name
      }
      return (
        <a
          className="coinName"
          href={"https://www.bithumb.com/trade/order/" + row.key}
          target="_blank"
          rel="noopener noreferrer"
        >
          {row.key}
          <span className="sub">{getKeyByValue(coinNameKR.bithumb, row.key)}</span>
        </a>
      );
    }
  },
  {
    selector: "Price",
    sortable: true,
    ignoreRowClick: true,
    width: "20%"
  },
  {
    selector: "FluctateRate",
    sortable: true,
    ignoreRowClick: true,
    cell: row => {
      if (row.FluctateRate < 0) {
        return (
          <div className="minus">
            {row.FluctateRate}% ({row.FluctateRate24}원)
          </div>
        );
      } else if (row.FluctateRate >= 0) {
        return (
          <div className="plus">
            +{row.FluctateRate}% (+{row.FluctateRate24}원)
          </div>
        );
      }
    }
  },
  {
    /* KRW-USD premium */

    selector: "premium",
    sortable: true,
    cell: row => {
      if (row.premium < 0) {
        return (
          <div className="minus">
            {row.premium}% ({row.premiumGap}원)
          </div>
        );
      } else {
        return (
          <div className="plus">
            +{row.premium}% (+{row.premiumGap}원)
          </div>
        );
      }
    }
  }
];

export { darkTheme, columns };
