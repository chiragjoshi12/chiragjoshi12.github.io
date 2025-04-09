// src/data/books.ts
export interface Book {
  title: string;
  author: string;
  link?: string;
  highlight?: "normal" | "great" | "remarkable";
}

export interface BooksByYear {
  year: string;
  books: Book[];
}

export const booksByYear: BooksByYear[] = [
  {
    year: "2025",
    books: [
      {
        title: "Elon Musk",
        author: "Ashlee Vance",
        highlight: "remarkable"
      }
    ]
  },
  {
    year: "2024",
    books: [
      {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        highlight: "great"
      },
      {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        highlight: "great"
      },
      {
        title: "Charlie Chaplin",
        author: "Charlie Chaplin",
        highlight: "remarkable"
      },
      {
        title: "સરદાર એટલે સરદાર",
        author: "ગુણવંત શાહ",
        highlight: "normal"
      },
      {
        title: "દિવાસ્વપ્ન",
        author: "ગિજુભાઈ બધેકા",
        highlight: "normal"
      },
      {
        title: "Totto-Chan: The Little Girl at the Window (Gujarati)",
        author: "Tetsuko Kuroyanagi",
        highlight: "remarkable"
      },
      {
        title: "Dollar Bahu",
        author: "Sudha Murthy",
        highlight: "normal"
      }
    ]
  }
]