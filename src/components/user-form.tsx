"use client";
import React, { Key } from "react";
import { useForm } from "react-hook-form";
import { useTransition } from "react";
import { createPhone } from "@/service/todo";
import { revalidatePath } from "next/cache";

export interface Inputs {
  id?: Key | null | undefined;
  title: string;
  rame: string;
  color: string;
  brand: string;
  price: number;
}

export const UserForm = () => {
  const {
    handleSubmit,
    reset,
    setError,
    register,
    formState: { errors },
  } = useForm<Inputs>();
  const [isPending, startTransition] = useTransition();

  const onSubmit = (data: Inputs) => {
    startTransition(async () => {
      try {
        await createPhone(data);
        reset();
      } catch (error) {
        const err = error as Error;
        setError("title", { message: err.message });
      }
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded mb-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Title (e.g., iPhone 14)"
            className="w-full p-2 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="RAM/Storage (e.g., 6/128 GB)"
            className="w-full p-2 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("rame", { required: "RAM/Storage is required" })}
          />
          {errors.rame && (
            <p className="text-red-500 text-sm mt-1">{errors.rame.message}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Color (e.g., Black)"
            className="w-full p-2 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("color", { required: "Color is required" })}
          />
          {errors.color && (
            <p className="text-red-500 text-sm mt-1">{errors.color.message}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Brand (e.g., Apple)"
            className="w-full p-2 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("brand", { required: "Brand is required" })}
          />
          {errors.brand && (
            <p className="text-red-500 text-sm mt-1">{errors.brand.message}</p>
          )}
        </div>

        <div>
          <input
            type="number"
            placeholder="Price (e.g., 1000000)"
            className="w-full p-2 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("price", {
              required: "Price is required",
              valueAsNumber: true,
              min: { value: 0, message: "Price cannot be negative" },
            })}
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-400"
          disabled={isPending}
        >
          {isPending ? "LOADING..." : "Add Phone"}
        </button>
      </form>
    </div>
  );
};