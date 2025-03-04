import { SignIn } from "@/components/signin-form";

export default function SingInPage() {
  return (
    <div>
      <h1>Sign In page</h1>
      <SignIn />
      <a
        href={`${process.env.BACKEND_URL}/auth/google/login`}
        className="border px-4 py-2 rounded bg-sky-600"
      >
        Sign In with Google
      </a>
    </div>
  );
}
