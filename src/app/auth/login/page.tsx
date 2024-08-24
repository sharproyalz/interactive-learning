import Link from "next/link";
import { paths } from "~/paths";

export default function LoginPage() {
  return (
    <section className="mx-auto my-8 max-w-screen-sm">
      <h1 className="text-center font-semibold italic">Login</h1>

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
            className="rounded-md border border-gray bg-transparent p-2 outline-none focus:border-white"
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
            className="rounded-md border border-gray bg-transparent p-2 outline-none focus:border-white"
          />
        </div>

        <button
          type="button"
          className="mt-12 w-full rounded-md border border-primary bg-primary p-2 font-semibold outline-none focus:border-white active:translate-x-1 active:translate-y-1"
        >
          Login
        </button>
      </form>

      <hr className="my-4 text-gray" />

      <div className="mx-8 flex">
        <Link
          href={`${paths.AUTH}${paths.SIGNUP}`}
          className="w-full rounded-md border border-primary/10 bg-primary/10 p-2 text-center font-semibold text-primary outline-none focus:border-white active:translate-x-1 active:translate-y-1"
        >
          Create an Account
        </Link>
      </div>
    </section>
  );
}
