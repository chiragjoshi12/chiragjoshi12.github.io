// src/data/books.ts
export interface Book {
  title: string;
  author: string;
  url?: string; // Optional: A URL for purchasing the book or for more info
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
        highlight: "normal",
        url: "https://www.amazon.com/Elon-Musk-Tesla-SpaceX-Fantastic/dp/0062301233"
      },
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        highlight: "normal",
      },
    ]
  },
  {
    year: "2024",
    books: [
      {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        highlight: "remarkable",
        url: "https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537"
      },
      {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        highlight: "great"
      },
      {
        title: "Charlie Chaplin",
        author: "Charlie Chaplin",
        highlight: "great"
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
      },
      {
        title: "The Man Who Knew Infinity : A Life of the Genius Ramanujan (Gujarati)",
        author: "Robert Kanigel",
        highlight: "normal"
      }
    ]
  }
]