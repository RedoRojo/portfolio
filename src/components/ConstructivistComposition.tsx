export default function ConstructivistComposition() {
  return (
    <div
      aria-hidden="true"
      className="w-full flex justify-center lg:justify-end select-none"
    >
      <svg
        viewBox="0 0 420 420"
        className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] h-auto block"
      >
        {/* Losa inferior de hormigón / papel */}
        <rect
          x="18"
          y="138"
          width="186"
          height="186"
          style={{ fill: "var(--geo-plane)" }}
        />

        {/* Monolito vertical brutalista */}
        <rect
          x="176"
          y="20"
          width="176"
          height="360"
          style={{ fill: "var(--geo-monolith)" }}
        />

        {/* Barra arquitectónica en negativo dentro del monolito */}
        <rect
          x="198"
          y="282"
          width="134"
          height="10"
          style={{ fill: "var(--bg-primary)" }}
        />

        {/* Anillo geométrico de precisión cruzando los planos */}
        <circle
          cx="176"
          cy="186"
          r="106"
          fill="none"
          strokeWidth="3.5"
          style={{ stroke: "var(--geo-line)" }}
        />

        {/* Vacío circular y cuadrante carmesí constructivista */}
        <circle
          cx="176"
          cy="186"
          r="68"
          style={{ fill: "var(--bg-primary)" }}
        />
        <path
          d="M 176 118 A 68 68 0 0 1 244 186 L 176 186 Z"
          style={{ fill: "var(--geo-crimson)" }}
        />

        {/* Cuña diagonal roja soviética atravesando los planos */}
        <polygon
          points="18,354 352,84 352,144 76,354"
          style={{ fill: "var(--geo-crimson)" }}
        />

        {/* Ancla cuadrada superior izquierda y viga horizontal base */}
        <rect
          x="18"
          y="20"
          width="36"
          height="36"
          style={{ fill: "var(--geo-crimson)" }}
        />
        <rect
          x="18"
          y="388"
          width="384"
          height="8"
          style={{ fill: "var(--geo-line)" }}
        />
      </svg>
    </div>
  );
}
