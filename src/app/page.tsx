import { UserForm } from "@/components/user-form";
import { getPhones } from "@/service/todo";
import { UserCard } from "@/components/user-card";

export interface Phone {
  id: number;
  title: string;
  rame: string;
  color: string;
  brand: string;
  price: number;
  img?: string;
}

export default async function Home() {
  const phones = await getPhones();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Telefonlar ro‘yxati</h1>
      <UserForm />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {phones.map((phone) => (
          <UserCard key={String(phone.id)} phone={phone} />
        ))}
      </div>
    </div>
  );
}