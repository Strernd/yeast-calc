import { useMemo, useEffect } from "react";

function calculateCellGrowth(initial, extract) {
  const rate = initial / extract;
  if (rate < 1.4) return 1.4 * extract;
  else if (rate < 3.5) return (2.33 - 0.67 * rate) * extract;
  else return 0;
}

export function useYeastCalculator(
  setResults,
  gravity,
  volume,
  initial,
  viability,
  retention,
  loss
) {
  const dme = useMemo(() => {
    return (2.75 * gravity * volume) / 1000;
  }, [gravity, volume]);

  const totalYeast = useMemo(() => {
    return initial + calculateCellGrowth(initial, dme);
  }, [initial, dme]);

  const table = useMemo(() => {
    const rows = [];
    let starterCells = initial;
    for (let i = 0; i < 8; i++) {
      let totalCells = starterCells + calculateCellGrowth(starterCells, dme);
      let pitchCells = totalCells * (1 - retention / 100) * (1 - loss / 100);
      let retainedCells = totalCells * (retention / 100);
      rows.push({ starterCells, totalCells, pitchCells, retainedCells });
      starterCells = (viability / 100) * retainedCells;
    }
    return rows;
  }, [initial, dme, viability, retention, loss]);

  const advancedMetrics = useMemo(() => {
    const { starterCells, totalCells, pitchCells } = table[table.length - 1];
    const buildFactor = Math.round((totalCells / starterCells) * 10) / 10;
    const pitch = pitchCells;
    return { buildFactor, pitch };
  }, [table]);

  useEffect(() => {
    setResults({ dme, totalYeast, table, advancedMetrics });
  }, [dme, setResults, totalYeast, table, advancedMetrics]);
}
