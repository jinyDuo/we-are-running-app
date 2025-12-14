import React from 'react';

type HambergerProps = React.SVGProps<SVGSVGElement>;

const Hamberger = React.forwardRef<SVGSVGElement, HambergerProps>(
  ({ width = 24, height = 24, className, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M2.10278 20H22.8972"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M2.10278 12H22.8972"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M2.10278 4H22.8972"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  )
);

Hamberger.displayName = 'Hamberger';

export default Hamberger;
