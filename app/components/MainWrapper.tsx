const MainWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className='min-h-screen max-w-md mx-auto pt-44'>{children}</main>
  );
};

export default MainWrapper;
