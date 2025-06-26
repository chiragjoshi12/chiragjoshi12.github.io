// src/components/bookshelf.tsx
// The unused 'Link' import has been removed.

interface Book {
  title: string;
  author: string;
  url?: string; // A URL for purchasing the book or for more info
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
              <li key={bookIndex} className={`text-lg ${getHighlightColor(book.highlight)}`}>
                {book.url ? (
                  <a
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline" // Underline on hover for better UX
                  >
                    {`${book.title} by ${book.author}`}
                  </a>
                ) : (
                  <span>{`${book.title} by ${book.author}`}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}