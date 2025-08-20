import Link from 'next/link';

const FooterComponent = () => {
  return (
    <footer className='w-full bg-stone-50 text-stone-900 py-12'>
      <div className='max-w-4xl mx-auto'>
        <div className='grid grid-cols-3 items-center'>
          <div>
            <Link href={'#'}>Impressum</Link>
          </div>
          <div>
            <p className='text-center'>&copy; {new Date().getFullYear()}</p>
          </div>
          <div className='flex justify-end'>
            <Link href={'#'}>Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
