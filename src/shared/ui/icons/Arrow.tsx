import React from 'react';

type ArrowProps = React.SVGProps<SVGSVGElement>;

const Arrow = React.forwardRef<SVGSVGElement, ArrowProps>(
  ({ width = 25, height = 24, className, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M13.5 20L8.5 12L13.5 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);

Arrow.displayName = 'Arrow';

export default Arrow;
