// app/components/QuestionComponent.tsx
import type { Question } from '@/app/types/Question';
import LikeButton from './LikeButton';

const QuestionComponent = ({ item }: { item: Question }) => {
  return (
    <div className='w-full bg-stone-50 text-stone-900 rounded-sm px-5 py-3 relative card flex mb-5'>
      <div className='flex flex-col flex-1'>
        <p>{item.createdAt}</p>
        <p>{item.question}</p>
      </div>
      <LikeButton question={item} />
    </div>
  );
};

export default QuestionComponent;
