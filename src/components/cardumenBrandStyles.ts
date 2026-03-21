export const cardumenBrandColorClassNames = {
  primary: "text-primary",
  secondary: "text-secondary",
  neutral: "text-gray-900",
} as const;

export const cardumenBrandClassNames = {
  iconWrapper:
    "w-12 h-12 bg-primary/10 organic-shape-1 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300",
  iconSvg: "w-9 h-9",
  wordmark:
    "font-serif font-black text-2xl tracking-tight text-gray-900 leading-none uppercase",
  submark:
    "font-sans font-semibold text-[0.70rem] tracking-[0.22em] text-secondary uppercase mt-1",
  // Filled primary action button
  primaryButton:
    "px-5 py-2.5 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group shadow-sm shadow-primary/20 rounded-full",
  // Outline ghost secondary button
  secondaryButton:
    "px-5 py-2.5 bg-transparent text-primary border border-primary/40 text-sm font-medium hover:bg-primary/5 hover:border-primary transition-all flex items-center justify-center gap-2 group rounded-full",
} as const;
