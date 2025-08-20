import Link from 'next/link';
import MainWrapper from './components/MainWrapper';

export default function Home() {
  return (
    <MainWrapper>
      <section className='flex flex-col gap-y-12 my-12 justify-center items-center'>
        <h1 className='text-4xl text-center'>
          Real-Time questions from your audience
        </h1>
        <p>
          Have you ever organized a meetup, conference, or moderated a panel
          discussion and wanted an easy way to receive real-time questions from
          your audience? Welcome to Live-Ask.
        </p>
        <Link href={'/create'}>
          <div className='rounded-sm bg-green-400 hover:bg-green-600 text-stone-900 text-center w-60 py-5'>
            CREATE YOUR EVENT
          </div>
        </Link>
      </section>
    </MainWrapper>
  );
}
