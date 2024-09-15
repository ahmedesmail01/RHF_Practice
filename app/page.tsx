import UsersProvider from "@/users/components/UsersProvider";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-start justify-center ">
      <UsersProvider />
    </div>
  );
}
