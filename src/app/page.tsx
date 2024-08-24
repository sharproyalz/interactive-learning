import { redirect } from "next/navigation";
import { paths } from "~/paths";

export default function HomePage() {
  // redirect(`${paths.AUTH}${paths.LOGIN}`);
  redirect(`${paths.STUDY_TIMER}`);

  return <section className=""></section>;
}
