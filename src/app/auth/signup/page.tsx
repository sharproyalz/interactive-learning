import Link from "next/link";
import { paths } from "~/paths";

export default function SignUpPage() {
  return (
    <section className="mx-auto my-8 max-w-screen-sm">
      <h1 className="text-center font-semibold italic">Sign up</h1>

      {/* Login Form */}
      <form className="mx-8">
        <div className="mt-12 flex flex-col">
          <label htmlFor="username" className="font-semibold">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="border-gray rounded-md border bg-transparent p-2 outline-none focus:border-white"
          />
        </div>

        <div className="mt-8 flex flex-col">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border-gray rounded-md border bg-transparent p-2 outline-none focus:border-white"
          />
        </div>

        <div className="mt-8 flex flex-col">
          <label htmlFor="password" className="font-semibold">
            Confirm Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border-gray rounded-md border bg-transparent p-2 outline-none focus:border-white"
          />
        </div>

        <button
          type="button"
          className="mt-12 w-full rounded-md border border-primary bg-primary p-2 font-semibold outline-none focus:border-white active:translate-x-1 active:translate-y-1"
        >
          Sign up
        </button>

        <p className="mt-2 text-center">
          Already have an account?{" "}
          <Link
            href={`${paths.AUTH}${paths.LOGIN}`}
            className="text-primary hover:underline"
          >
            Login
          </Link>{" "}
        </p>
      </form>
    </section>
  );
}
