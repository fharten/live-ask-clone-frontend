'use client';

import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { updateQuestion } from '@/app/lib/actions';
import type { Question } from '@/app/types/Question';

export default function LikeButton({ question }: { question: Question }) {
  const [liked, setLiked] = useState(false);

  // Check localStorage once on mount
  useEffect(() => {
    const likedQuestions: string[] = JSON.parse(
      localStorage.getItem('likedQuestions') || '[]',
    );
    setLiked(likedQuestions.includes(question.id));
  }, [question.id]);

  async function handleClick() {
    const likedQuestions: string[] = JSON.parse(
      localStorage.getItem('likedQuestions') || '[]',
    );

    let newLikes = question.numLikes;

    if (liked) {
      // Unlike
      newLikes = question.numLikes - 1;
      const updated = likedQuestions.filter((id) => id !== question.id);
      localStorage.setItem('likedQuestions', JSON.stringify(updated));
      setLiked(false);
    } else {
      // Like
      newLikes = question.numLikes + 1;
      likedQuestions.push(question.id);
      localStorage.setItem('likedQuestions', JSON.stringify(likedQuestions));
      setLiked(true);
    }

    // Send update to backend
    const formData = new FormData();
    formData.set('numLikes', String(newLikes));
    await updateQuestion(question.id, formData);
  }

  return (
    <button onClick={handleClick} className='flex flex-col items-center'>
      <Heart fill={liked ? 'red' : 'none'} color='red' />
      <p>{question.numLikes + (liked ? 1 : 0) - (liked ? 0 : 0)}</p>
    </button>
  );
}
