interface IconProps {
  name: "arrow-right" | "chevron-down" | "menu" | "x";
  className?: string;
  "aria-hidden"?: boolean;
}

const icons: Record<IconProps["name"], React.ReactNode> = {
  "arrow-right": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  ),
  "chevron-down": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  ),
  menu: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  ),
  x: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  ),
};

export function Icon({
  name,
  className = "w-5 h-5",
  "aria-hidden": ariaHidden = true,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      aria-hidden={ariaHidden}
    >
      {icons[name]}
    </svg>
  );
}
