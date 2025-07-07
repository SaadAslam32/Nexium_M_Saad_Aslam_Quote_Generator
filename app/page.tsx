'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';


type Quote = {
  topic: string;
  quote: string;
};

const quotes: Quote[] = [
  // ... your quotes
];

export default function Home() {
  const [topic, setTopic] = useState('');
  // ✅ Add the correct type here:
  const [results, setResults] = useState<Quote[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = quotes.filter(q =>
      q.topic.toLowerCase().includes(topic.toLowerCase())
    );
    setResults(filtered.slice(0, 3));
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="flex items-center gap-4 mb-6">
        <Input
          type="text"
          placeholder="Enter a topic (e.g. life, motivation)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button type="submit">Get Quotes</Button>
      </form>

      {results.length > 0 && (
        <div className="space-y-4">
          {results.map((q, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <p className="text-lg">{q.quote}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  — Topic: {q.topic}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
