"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

type Book = {
  title: string;
  author: string;
  year: string;
};

type Props = {
  books: readonly Book[];
};

export function BookshelfCard({ books }: Props) {
  const currentBook = books[0] ? `${books[0].title} — ${books[0].author}` : "Nothing yet";
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="bg-background w-full max-w-sm rounded-2xl shadow-2xl border overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <div>
            <div className="text-sm font-semibold">Books I&apos;ve read</div>
            <div className="text-xs text-muted-foreground">{books.length} books</div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-muted-foreground hover:text-foreground transition-colors text-lg leading-none"
          >
            ✕
          </button>
        </div>
        <ul className="divide-y max-h-[60vh] overflow-y-auto">
          {books.map((book) => (
            <li key={book.title} className="flex items-center justify-between px-5 py-3 gap-4">
              <div className="min-w-0">
                <div className="text-sm font-medium truncate">{book.title}</div>
                <div className="text-xs text-muted-foreground">{book.author}</div>
              </div>
              <span className="text-xs text-muted-foreground flex-shrink-0">{book.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl border p-3 text-left w-full hover:bg-muted/50 transition-colors group"
      >
        <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1 flex items-center justify-between">
          <span>Reading</span>
          <span className="text-[9px] opacity-0 group-hover:opacity-60 transition-opacity normal-case tracking-normal font-normal">
            See all books →
          </span>
        </div>
        <div className="text-sm font-medium">{currentBook}</div>
      </button>

      {mounted && open && createPortal(modal, document.body)}
    </>
  );
}
