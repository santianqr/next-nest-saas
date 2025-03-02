import { getProfile } from "@/lib/actions";

export default async function ProfilePage() {
  const res = await getProfile();
  return (
    <div>
      ProfilePage
      <p>{JSON.stringify(res)}</p>
    </div>
  );
}
