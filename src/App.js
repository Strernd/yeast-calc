import React, { useState } from "react";
import Calculator from "./components/Calculator";
import Results from "./components/Results";
import Info from "./components/Info";

function App() {
  const [results, setResults] = useState({
    dme: 0,
    totalYeast: 0,
    table: [],
    advancedMetrics: { pitch: 0, buildFactor: 1 }
  });

  return (
    <div style={{ maxWidth: 960 }} className="mx-auto mt-12 shadow p-4">
      <h1 className="text-xl">Long Term Yeast Starter Calculator</h1>
      <Info>
        This calculator uses the Braukaiser formula for starters with stir
        plates and show the evolution of re-iterated starters with the same
        settings.
      </Info>
      <div className="mb-4" />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <Calculator setResults={setResults} />
          <div className="border-b border-gray-600 mb-2 pb-2" />
          <Info>
            <span className="font-bold">
              What can we learn from this? <br />
            </span>
            1. The amount of cells you can pitch long term is not dependent on
            the inital cells. (Keep in mind you shouln't go for more than
            10x-ing your inital cell count. Use a multi-step starter if
            necessary.) <br />
            2. The amount of the starter you should retain is only depending on
            the viability that remains (which depends on how long you store the
            yeast). If you're assuming pessimistic 50% viability remaining, 20%
            of the starter should be retained. If you assume 90% of the yeast
            will live when building the next starter, 11% retention is fine.
            <br />
            <br />
            *All statements without guarantee
          </Info>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <Results results={results} />
        </div>
      </div>
      <p className="text-xs text-gray-600">
        By Hopload Brewing 2020. No data stored anywhere.{" "}
        <a
          href="https://strehl.dev/#imprint"
          target="_blank"
          rel="noopener noreferrer"
        >
          Imprint
        </a>
      </p>
    </div>
  );
}

export default App;
