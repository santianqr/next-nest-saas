import Link from "next/link";
import { SignInBtn } from "./singIn-btn";

export function NavBar() {
  return (
    <div className="p-2 shadow flex gap-3 bg-gradient-to-br from-blue-400 to-cyan-400 text-white">
      <Link href={"/"}>Home</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/profile"}>Profile</Link>
      <SignInBtn />
    </div>
  )
}
