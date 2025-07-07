'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';


  const quotes = [
  { topic: 'life', quote: 'Life is what happens when you’re busy making other plans.' },
  { topic: 'life', quote: 'The purpose of our lives is to be happy.' },
  { topic: 'life', quote: 'Life is really simple, but we insist on making it complicated.' },

  { topic: 'motivation', quote: 'Push yourself, because no one else is going to do it for you.' },
  { topic: 'motivation', quote: 'Success doesn’t just find you. You have to go out and get it.' },
  { topic: 'motivation', quote: 'Great things never come from comfort zones.' },

  { topic: 'success', quote: 'Success is not in what you have, but who you are.' },
  { topic: 'success', quote: 'Don’t be afraid to give up the good to go for the great.' },
  { topic: 'success', quote: 'Success usually comes to those who are too busy to be looking for it.' },

  { topic: 'love', quote: 'Love all, trust a few, do wrong to none.' },
  { topic: 'love', quote: 'Where there is love there is life.' },
  { topic: 'love', quote: 'To love and be loved is to feel the sun from both sides.' },

  { topic: 'friendship', quote: 'A real friend is one who walks in when the rest of the world walks out.' },
  { topic: 'friendship', quote: 'Friendship is the only cement that will ever hold the world together.' },
  { topic: 'friendship', quote: 'True friends are never apart, maybe in distance but never in heart.' },

  { topic: 'happiness', quote: 'Happiness is not something ready-made. It comes from your own actions.' },
  { topic: 'happiness', quote: 'For every minute you are angry you lose sixty seconds of happiness.' },
  { topic: 'happiness', quote: 'The best way to cheer yourself is to try to cheer someone else up.' }
];



export default function Home() {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = quotes.filter(q => q.topic.toLowerCase().includes(topic.toLowerCase()));
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
                <p className="text-sm text-muted-foreground mt-2">— Topic: {q.topic}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
