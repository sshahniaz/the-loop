"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Input = () => {
  const [searchQuery, setSearchQuery] = useState("");
  //
  const router = useRouter();
  //
  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);

    // console.log("current query", encodedSearchQuery);
  };

  return (
    <form action="" onSubmit={onSearch}>
      <input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        type={"search"}
        name={"search"}
        placeholder={"Search for a product"}
      />
    </form>
  );
};

export default Input;
