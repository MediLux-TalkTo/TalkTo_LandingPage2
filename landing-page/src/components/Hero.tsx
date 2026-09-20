const Hero = () => {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold">
          Your Service
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          서비스의 핵심 가치를
          <br />
          한 문장으로 전달하세요.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
          사용자가 서비스를 사용해야 하는 이유를
          짧고 명확하게 설명합니다.
        </p>

        <button className="mt-8 rounded-full bg-black px-7 py-3 text-white">
          시작하기
        </button>
      </div>
    </section>
  );
};

export default Hero;