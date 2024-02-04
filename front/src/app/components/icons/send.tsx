import { SVGProps } from 'react';

export const Send = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-send-horizontal"
    {...props}
  >
    <path d="m3 3 3 9-3 9 19-9ZM6 12h16" />
  </svg>
);
