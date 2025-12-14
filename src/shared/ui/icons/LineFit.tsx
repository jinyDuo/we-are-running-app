import React from 'react';

type LineFitProps = React.SVGProps<SVGSVGElement>;

const LineFit = React.forwardRef<SVGSVGElement, LineFitProps>(
  ({ width = 4, height = 9, className, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 4 9"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M0 9L-4.86394e-07 2.16175e-07L4 0L4 9L0 9Z" fill="currentColor" />
    </svg>
  )
);

LineFit.displayName = 'LineFit';

export default LineFit;

