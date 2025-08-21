import { notFound } from 'next/navigation';
import {
  getEventById,
  getQuestionsByEvent,
  createQuestion,
} from '@/app/lib/actions';
import { MessageSquareHeart, MessageSquareQuote } from 'lucide-react';
import QuestionComponent from '@/app/components/QuestionComponent';

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = await getEventById(id);
  const questions = await getQuestionsByEvent(id);
  let likesOverall = 0;

  for (let i = 0; i < questions.length; i++) {
    likesOverall += questions[i].numLikes;
  }

  if (!event) {
    notFound();
  }

  return (
    <div>
      <div className='bg-stone-50 text-stone-900 pt-24 pb-18'>
        <div className='max-w-md mx-auto'>
          <h3 className='text-xs'>THE EVENT</h3>
          <h1 className='font-cold text-4xl mb-6'>{event.title}</h1>
          <p>{event.description}</p>
        </div>
      </div>

      <section className='flex flex-col max-w-2xl mx-auto min-h-screen mt-10'>
        <form action={createQuestion} className='flex flex-col mb-12'>
          <input name='sessionId' value={id} type='hidden' />
          <textarea
            name='question'
            className='mb-4 bg-stone-50 text-stone-900 px-4 py-1'
            required
            minLength={20}
          />
          <button
            type='submit'
            className='rounded-sm bg-green-400 hover:bg-green-600 text-stone-900 text-center w-30 py-2 self-end cursor-pointer'
          >
            Send
          </button>
        </form>
        <div className='flex items-center justify-center'>
          <MessageSquareQuote />
          <span className='ml-2 mr-5'>{questions.length}</span>
          <MessageSquareHeart />
          <span className='ml-2'>{likesOverall}</span>
        </div>
        <h2 className='text-xs text-center mt-8 mb-4'>HOT QUESTIONS</h2>
        <div>
          {questions.map((q) => (
            <QuestionComponent item={q} key={q.id} />
          ))}
        </div>
      </section>
      <section className='max-w-2xl mx-auto mt-10'>
        <h2>Answered</h2>
        <div>questions</div>
      </section>
    </div>
  );
}
