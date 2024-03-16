import Link from 'next/link';

import { buttonVariants } from '~/components/ui/button';
import { siteConfig } from '~/config/site';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center gap-2 p-8">
      <h1 className="text-3xl">
        {siteConfig.emoji} {siteConfig.name}
      </h1>

      <Link href="/welcome" className={buttonVariants()}>
        Welcome
      </Link>
    </section>
  );
}
