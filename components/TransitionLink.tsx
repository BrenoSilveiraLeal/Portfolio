'use client';

import Link, { type LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  children: ReactNode;
} & Pick<LinkProps, 'prefetch' | 'replace' | 'scroll'>;

export function TransitionLink({ href, children, ...props }: Props) {
  const router = useRouter();

  return <Link
    href={href}
    {...props}
    onNavigate={(event) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        event.preventDefault();
        router.push(href);
        return;
      }

      event.preventDefault();
      document.documentElement.classList.add('route-leaving');
      window.setTimeout(() => {
        document.documentElement.classList.remove('route-leaving');
        router.push(href);
      }, 170);
    }}
  >{children}</Link>;
}
