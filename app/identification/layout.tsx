interface LayoutPropsTypes {
  children: React.ReactNode;
}

function Layout({ children }: LayoutPropsTypes) {
  return (
    <section className="relative min-h-d-screen flex-center-center">
      <div className="absolute top-0 left-0 h-full w-1/2 z-0 bg-identification-image bg-cover brightness-50"></div>
      <div className="z-[1] bg-unique-gray-900 min-h-d-screen sm:min-h-[600px] sm:w-[500px] w-full sm:my-8 flex-center-center flex-col py-3 px-5 shadow-md shadow-black sm:rounded-2xl">
        {children}
      </div>
    </section>
  );
}

export default Layout;
