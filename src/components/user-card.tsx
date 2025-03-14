import React from "react";

export interface Phone {
  id: number;
  title: string;
  rame: string;
  color: string;
  brand: string;
  price: number;
  img?: string;
}

export const UserCard = ({ phone }: { phone: Phone }) => {
  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <h2 className="text-xl font-bold mb-2">{phone.title}</h2>
      <p className="text-gray-700">RAM/Storage: {phone.rame}</p>
      <p className="text-gray-700">Color: {phone.color}</p>
      <p className="text-gray-700">Brand: {phone.brand}</p>
      <p className="text-green-600 font-semibold">Price: {phone.price} so'm</p>
    </div>
  );
};