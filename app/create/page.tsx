import { createEvent } from '../lib/actions';
import MainWrapper from '../components/MainWrapper';

const CreatePage = () => {
  return (
    <MainWrapper>
      <section>
        <h1 className='font-bold mb-5'>CREATE EVENT</h1>
        <div className='bg-stone-50 text-stone-900 p-12 rounded-sm'>
          <form action={createEvent} className='flex flex-col gap-y-8'>
            <input
              name='title'
              placeholder='event name'
              className='border-b border-stone-900 focus:outline-0 focus:border-green-400'
              required
            />
            <textarea
              name='description'
              placeholder='event description'
              className='border-b border-stone-900 focus:outline-0 focus:border-green-400'
              required
            />
            <div className='flex justify-end'>
              <button
                type='submit'
                className='px-4 py-2 bg-green-600 text-white rounded-sm hover:bg-green-700 hover:cursor-pointer'
              >
                Create Volume
              </button>
            </div>
          </form>
        </div>
      </section>
    </MainWrapper>
  );
};

export default CreatePage;
