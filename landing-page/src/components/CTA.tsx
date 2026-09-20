const CTA = () => {
  return (
    <section id="cta" className="px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-3xl bg-black px-8 py-16 text-center text-white md:px-16">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          지금 바로 시작해보세요.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-gray-400">
          더 쉽고 새로운 경험을 지금 만나보세요.
        </p>

        <button className="mt-8 rounded-full bg-white px-7 py-3 font-medium text-black transition hover:bg-gray-200">
          시작하기
        </button>
      </div>
    </section>
  );
};

export default CTA;