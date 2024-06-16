import { useState } from "react";
import { makeCreateBookForm } from "./utils";
import { IBook } from "src/types/book/IBook";

export function useBooks() {
  const [isCreating, setIsCreating] = useState(false);
  const [form, setForm] = useState(makeCreateBookForm);

  const booksMock = [
    {
      id: 1,
      title: "Get Well Soon",
      author: "Breton",
      readAt: "2024-06-11",
      finished: false,
      favorite: true,
      rating: 4,
    },
    {
      id: 2,
      title: "Obstacles",
      author: "Syd Matters",
      readAt: "2024-06-11",
      finished: true,
      favorite: true,
    },
    {
      id: 3,
      title: "Something good tonight will make me forget about you",
      author: "Alt-J",
      readAt: "2024-06-11",
      finished: false,
      favorite: false,
    },
  ];

  function handleFormChange(key: keyof IBook, value: any) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleCreateClick() {
    setIsCreating(true);
  }

  function handleOutsideClick() {
    setIsCreating(false);
  }

  return {
    booksMock,
    handleCreateClick,
    handleOutsideClick,
    isCreating,
    form,
    handleFormChange,
  };
}
