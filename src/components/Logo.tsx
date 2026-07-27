export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="100" height="100" rx="22" fill="currentColor" />
      <path
        d="M20 58 L50 24 L58 32 L34 58 Z"
        fill="var(--color-bg)"
      />
      <path
        d="M34 58 L64 24 L72 32 L48 58 Z"
        fill="var(--color-bg)"
        opacity="0.55"
      />
      <path
        d="M48 66 L72 40 L80 48 L62 66 Z"
        fill="var(--color-bg)"
        opacity="0.3"
      />
    </svg>
  );
}
