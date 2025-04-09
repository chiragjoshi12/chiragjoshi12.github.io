// src/components/bookshelf.tsx
import Link from "next/link";

interface Book {
  title: string;
  author: string;
  link?: string;
  highlight?: "normal" | "great" | "remarkable";
}

interface BooksByYear {
  year: string;
  books: Book[];
}

interface BookshelfProps {
  booksByYear: BooksByYear[];
}

export function Bookshelf({ booksByYear }: BookshelfProps) {
  // Function to determine text color based on highlight status
  const getHighlightColor = (highlight?: string) => {
    switch (highlight) {
      case "great":
        return "text-blue-600";
      case "remarkable":
        return "text-green-600";
      default:
        return "text-black";
    }
  };

  return (
    <div className="max-w-3xl">
      {booksByYear.map((yearData, yearIndex) => (
        <div key={yearIndex} className="mb-12">
          <h2 className="text-4xl font-bold text-zinc-800 mb-6">{yearData.year}</h2>
          <ul className="list-disc pl-8 space-y-3">
            {yearData.books.map((book, bookIndex) => (
              <li key={bookIndex} className="text-lg">
                {book.link ? (
                  <Link 
                    href={book.link} 
                    className={`${getHighlightColor(book.highlight)} hover:underline`}
                  >
                    {book.title}
                  </Link>
                ) : (
                  <span className={getHighlightColor(book.highlight)}>{book.title}</span>
                )}
                {" by " + book.author}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}