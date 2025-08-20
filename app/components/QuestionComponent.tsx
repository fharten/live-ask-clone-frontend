import { Heart } from 'lucide-react';
import { Question } from '../types/Question';
import { likeQuestion } from '../actions';

const QuestionComponent = ({ item }: { item: Question }) => {
  return (
    <div className='w-full bg-stone-50 text-stone-900 rounded-sm px-5 py-3 flex relative card mb-5'>
      <div className='flex flex-col flex-1'>
        <p className='text-xs text-stone-400'>{item.createdAt}</p>
        <p>{item.question}</p>
      </div>
      <div>
        <form action={likeQuestion}>
          <button type='submit'>
            <Heart fill='red' color='red' />
            <input name='id' value={item.sessionId} type='hidden' />
          </button>
        </form>
        <p className='text-center'>{item.numLikes}</p>
      </div>
    </div>
  );
};

export default QuestionComponent;
