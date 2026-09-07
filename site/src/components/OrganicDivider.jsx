// Generates a row of uniform semicircle "scallop" bumps rising into the
// section above, matching the reference hero -> about transition.
function scallopPath(width, bumpR, baseHeight) {
  const count = Math.round(width / (2 * bumpR));
  const r = width / (2 * count);
  let d = `M0,${r}`;
  for (let i = 0; i < count; i++) {
    d += ` a${r},${r} 0 0 0 ${2 * r},0`;
  }
  d += ` V${baseHeight} H0 Z`;
  return d;
}

export default function OrganicDivider({ fill = "#F7F8F4", className = "" }) {
  const width = 1440;
  const bumpR = 26;
  const height = 90;
  const d = scallopPath(width, bumpR, height);

  return (
    <div className={`absolute inset-x-0 bottom-0 translate-y-px leading-none ${className}`} aria-hidden="true">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="w-full h-[46px] sm:h-[64px] lg:h-[84px] block"
      >
        <path d={d} fill={fill} />
      </svg>
    </div>
  );
}
