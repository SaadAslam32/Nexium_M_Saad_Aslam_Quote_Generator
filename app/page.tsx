'use client';

import { useState } from 'react';


import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';


import quotes from '@/data/quotes.json';

type Quote = {
  topic: string;
  quote: string;
};

const typedQuotes = quotes as Quote[];

export default function Home() {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState<Quote[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = typedQuotes.filter((q) =>
      q.topic.toLowerCase().includes(topic.toLowerCase())
    );
    setResults(filtered.slice(0, 3));
    setHasSearched(true); // ✅
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        ✨ Quote Generator ✨
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-4 mb-8"
      >
        <Input
          type="text"
          placeholder="Enter a topic (e.g. life, motivation)"
          value={topic}
          className="w-72 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button
          type="submit"
          className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
        >
          Get Quotes
        </Button>
      </form>

      {results.length > 0 && (
        <div className="space-y-4 w-full max-w-xl">
          {results.map((q, index) => (
            <Card
              key={index}
              className="shadow-lg rounded-lg border border-gray-200 bg-white hover:shadow-xl transition duration-300"
            >
              <CardContent className="p-6">
                <p className="text-xl font-serif text-gray-800">{q.quote}</p>
                <p className="text-sm text-gray-500 mt-4">— Topic: {q.topic}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {hasSearched && results.length === 0 && topic && (
        <p className="mt-4 text-gray-600">
          No quotes found for &quot;{topic}&quot;.
        </p>
      )}

    </main>
  );
}
