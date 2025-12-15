"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const InputSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e) => {
    e.preventDefault();

    const searchText = e.target.search.value.trim();
    const params = new URLSearchParams(searchParams.toString());

    if (searchText) {
      params.set("search", searchText);
    } else {
      params.delete("search");
    }

    router.push(`?search=${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="text-center my-4">
      <input
        name="search"
        defaultValue={searchParams.get("search") || ""}
        className="w-2xl border p-2 rounded-2xl"
        type="text"
        placeholder="Search your food"
      />

      <button
        type="submit"
        className="bg-cyan-600 px-4 py-2 rounded-xl cursor-pointer ml-2 text-white"
      >
        Search
      </button>
    </form>
  );
};

export default InputSearch;
