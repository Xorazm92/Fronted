"use server";
import { revalidateTag } from "next/cache";
import { Key } from "readline";

const url = process.env.BASE_URL || "https://jsonplaceholder.typicode.com";

export interface Inputs {
  id: Key | null | undefined;
  title: string;
  rame: string;
  color: string;
  brand: string;
  price: number;
}

export const createPhone = async (phone: Inputs) => {
  const res = await fetch(`${url}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(phone),
  });

  if (!res.ok) {
    throw new Error("Failed to create phone");
  }

  revalidateTag("phone_list");
  const data = await res.json();
  return data;
};

export const getPhones = async () => {
  const res = await fetch(`${url}/posts`, {
    next: { tags: ["phone_list"] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch phones");
  }

  const data = await res.json();
  const phones: Inputs[] = data.map((item: any) => ({
    id: item.id,
    title: item.title,
    rame: "N/A",
    color: "N/A",
    brand: "N/A",
    price: 0,
  }));

  return phones.slice(0, 5);
};

export const updatePhone = async (phone: Inputs) => {
    const res = await fetch(`${url}/posts/${phone.id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(phone),
    });
    
    if (!res.ok) {
        throw new Error("Failed to update phone");
    }
    
    revalidateTag("phone_list");
    const data = await res.json();
    return data;
    }
export const deletePhone = async (id: Key) => {
    const res = await fetch(`${url}/posts/${id}`, {
        method: "DELETE",
    });
    
    if (!res.ok) {
        throw new Error("Failed to delete phone");
    }
    
    revalidateTag("phone_list");
    return id;
    }
    