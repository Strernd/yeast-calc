import React from "react";
import Info from "./Info";

function Results({ results }) {
  return (
    <div className="text-gray-700">
      <p>DME: {results.dme} gram</p>
      <Info>Amount of Dry Malt Extract required for the starter</Info>
      <p>Total Yeast: {Math.round(results.totalYeast)} B. Cells </p>
      <Info>Amount of Yeast Cells from the first starter.</Info>
      <div className="mb-2 pb-2 border-b border-gray-600" />
      <p>
        Long term Pitch cells: {Math.round(results.advancedMetrics.pitch)} B.
        Cells
      </p>
      <Info>
        The amount of yeast cells you'll have left over for pitching after
        multiple cycles of building a starter. For details see the table below.
      </Info>

      <p> Build Factor: {results.advancedMetrics.buildFactor}</p>
      <Info>
        Resulting Yeast Cells / Initial Yeast Cells. This rate should be equal
        or lower than 10. (Citation needed)
      </Info>

      <div className="mt-4">
        <div className="mb-2 flex flex-row">
          <div className="w-16 font-bold text-sm">Gen.</div>
          <div className="w-24 font-bold text-sm">Inital Cells</div>
          <div className="w-24 font-bold text-sm">Total Cells</div>
          <div className="w-24 font-bold text-sm">Pitch Cells</div>
          <div className="w-24 font-bold text-sm">Ret. Cells</div>
        </div>

        {results.table.map((row, idx) => (
          <div className={`mb-2 flex flex-row text-gray-${900 - idx * 100}`} key={idx}>
            <div className="w-16">#{idx + 1}</div>
            <div className="w-24">{Math.round(row.starterCells)}</div>
            <div className="w-24">{Math.round(row.totalCells)}</div>
            <div className="w-24">{Math.round(row.pitchCells)}</div>
            <div className="w-24">{Math.round(row.retainedCells)}</div>
          </div>
        ))}
      </div>
      <Info>
        As you can see the values are converging to a steady value. Almost no
        change in the fourth generation and none in the fifth.
      </Info>
    </div>
  );
}

export default Results;
