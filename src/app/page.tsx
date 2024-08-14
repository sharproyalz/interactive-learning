import { redirect } from "next/navigation";
import { paths } from "~/paths";

export default function HomePage() {
  redirect(`${paths.AUTH}${paths.LOGIN}`);

  return <section className=""></section>;
}
