"use client";

import { CardumenDrops } from "./CardumenDrops";
import { cardumenBrandClassNames } from "./cardumenBrandStyles";

interface CardumenBrandIconProps {
  className?: string;
}

export function CardumenBrandIcon({ className = "" }: CardumenBrandIconProps) {
  return (
    <div className={`${cardumenBrandClassNames.iconWrapper} ${className}`}>
      <CardumenDrops className={cardumenBrandClassNames.iconSvg} />
    </div>
  );
}
