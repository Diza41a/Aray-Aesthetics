import React from 'react';
import Link from 'next/link';

export default function NextPageLink({ props }) {
  return (
    <Link className="next-page-link" href={ props?.href || '/' } style={{...props.style}} >
      <i className="fa-solid fa-chevron-down" />
    </Link>
  );
};
