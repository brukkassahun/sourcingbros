interface ChartData {
  label: string;
  value: number;
  color?: string;
}

interface ArticleChartProps {
  chartType: "bar" | "line" | "donut" | "comparison";
  chartTitle: string;
  chartData: ChartData[];
  chartUnit?: string;
}

const DEFAULT_COLORS = ["#D4A84B", "#0F1B2D", "#B8923A", "#1A2B45", "#243656", "#D4A84B", "#0F1B2D"];

export default function ArticleChart({ chartType, chartTitle, chartData, chartUnit = "" }: ArticleChartProps) {
  if (chartType === "bar") {
    const maxVal = Math.max(...chartData.map((d) => d.value));
    const barWidth = 100 / chartData.length;

    return (
      <div className="my-8 overflow-hidden rounded-2xl border border-line bg-cream p-6">
        <h4 className="mb-6 text-center font-sans text-sm font-bold uppercase tracking-wider text-navy">{chartTitle}</h4>
        <div className="flex items-end justify-around gap-2" style={{ height: "260px" }}>
          {chartData.map((d, i) => {
            const height = (d.value / maxVal) * 100;
            const color = d.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length];
            return (
              <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <span className="font-display text-xs font-black text-navy">
                  {d.value}{chartUnit}
                </span>
                <div
                  className="w-full max-w-[60px] rounded-t-lg transition-all duration-500 hover:opacity-80"
                  style={{ height: `${height}%`, backgroundColor: color, minHeight: "4px" }}
                />
                <span className="text-center text-[10px] font-medium leading-tight text-muted">{d.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (chartType === "donut") {
    const total = chartData.reduce((sum, d) => sum + d.value, 0);
    let cumulative = 0;
    const radius = 70;
    const circumference = 2 * Math.PI * radius;

    return (
      <div className="my-8 overflow-hidden rounded-2xl border border-line bg-cream p-6">
        <h4 className="mb-6 text-center font-sans text-sm font-bold uppercase tracking-wider text-navy">{chartTitle}</h4>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <svg width="180" height="180" viewBox="0 0 180 180" className="shrink-0">
            {chartData.map((d, i) => {
              const percentage = d.value / total;
              const dash = percentage * circumference;
              const offset = cumulative * circumference;
              cumulative += percentage;
              const color = d.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length];
              return (
                <circle
                  key={i}
                  cx="90"
                  cy="90"
                  r={radius}
                  fill="none"
                  stroke={color}
                  strokeWidth="28"
                  strokeDasharray={`${dash} ${circumference - dash}`}
                  strokeDashoffset={-offset}
                  transform="rotate(-90 90 90)"
                />
              );
            })}
            <text x="90" y="95" textAnchor="middle" className="fill-navy font-display text-lg font-black">
              {total}{chartUnit}
            </text>
          </svg>
          <div className="flex flex-col gap-3">
            {chartData.map((d, i) => {
              const color = d.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length];
              return (
                <div key={i} className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: color }} />
                  <span className="text-sm text-navy">{d.label}</span>
                  <span className="font-display text-sm font-bold text-gold">{d.value}{chartUnit}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (chartType === "comparison") {
    const maxVal = Math.max(...chartData.map((d) => d.value));
    return (
      <div className="my-8 overflow-hidden rounded-2xl border border-line bg-cream p-6">
        <h4 className="mb-6 text-center font-sans text-sm font-bold uppercase tracking-wider text-navy">{chartTitle}</h4>
        <div className="space-y-4">
          {chartData.map((d, i) => {
            const width = (d.value / maxVal) * 100;
            const color = d.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length];
            return (
              <div key={i} className="flex items-center gap-4">
                <span className="w-28 shrink-0 text-right text-xs font-medium text-muted">{d.label}</span>
                <div className="relative h-8 flex-1 overflow-hidden rounded-lg bg-white">
                  <div
                    className="flex h-full items-center justify-end rounded-lg pr-3 transition-all duration-500"
                    style={{ width: `${width}%`, backgroundColor: color, minWidth: "40px" }}
                  >
                    <span className="font-display text-xs font-black text-white">{d.value}{chartUnit}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // line chart
  const maxVal = Math.max(...chartData.map((d) => d.value));
  const points = chartData
    .map((d, i) => {
      const x = (i / (chartData.length - 1)) * 100;
      const y = 100 - (d.value / maxVal) * 90 - 5;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-line bg-cream p-6">
      <h4 className="mb-6 text-center font-sans text-sm font-bold uppercase tracking-wider text-navy">{chartTitle}</h4>
      <div className="relative h-48 w-full">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
          <polyline
            points={points}
            fill="none"
            stroke="#D4A84B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          {chartData.map((d, i) => {
            const x = (i / (chartData.length - 1)) * 100;
            const y = 100 - (d.value / maxVal) * 90 - 5;
            return <circle key={i} cx={x} cy={y} r="1.5" fill="#0F1B2D" />;
          })}
        </svg>
      </div>
      <div className="mt-4 flex justify-between">
        {chartData.map((d, i) => (
          <span key={i} className="text-[10px] font-medium text-muted">{d.label}</span>
        ))}
      </div>
    </div>
  );
}
