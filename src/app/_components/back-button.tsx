'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { buttonVariants } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export function BackButton() {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className={cn(buttonVariants(), 'fixed bottom-6 left-6 z-50', pathname === '/' && 'hidden')}
    >
      &lt;- Back
    </Link>
  );
}
