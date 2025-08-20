import Link from 'next/link';
import { MessageCircleQuestionMark } from 'lucide-react';

const HeaderComponent = () => {
  return (
    <header className='w-full bg-stone-50 text-stone-900 py-4 fixed'>
      <div className='max-w-4xl mx-auto flex'>
        <div className='flex flex-1'>
          <Link href={'/'} className='flex items-center'>
            <div className='bg-green-400 rounded-full p-2'>
              <MessageCircleQuestionMark />
            </div>
            <h1 className='ml-5 text-2xl font-bold'>Live-Ask-Clone</h1>
          </Link>
        </div>
        <div className='flex items-center'>
          <Link href={'/create'}>Create Event</Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
