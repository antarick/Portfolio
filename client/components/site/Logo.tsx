export function Logo({ className }: { className?: string }) {
  return (
    <button
      onClick={() => {
        const el = document.getElementById("home");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className={`flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary rounded ${className}`}
    >
      {/* Nx monogram in gradient rounded square */}
      <svg
        width="45"
        height="45"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="rounded-lg"
      >
        <defs>
          <linearGradient id="nx-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7F5AF0" />
            <stop offset="100%" stopColor="#FF49DB" />
          </linearGradient>
        </defs>

        {/* Rounded square background */}
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          rx="20"
          fill="url(#nx-grad)"
        />

        {/* N shape */}
        <line x1="25" y1="75" x2="25" y2="25" stroke="white" strokeWidth="10" />
        <line x1="25" y1="25" x2="75" y2="75" stroke="white" strokeWidth="10" />
        <line x1="75" y1="25" x2="75" y2="75" stroke="white" strokeWidth="10" />

        {/* X inside N */}
        <line x1="37" y1="37" x2="63" y2="63" stroke="white" strokeWidth="6" />
        <line x1="63" y1="37" x2="37" y2="63" stroke="white" strokeWidth="6" />
      </svg>

    </button>
  );
}
