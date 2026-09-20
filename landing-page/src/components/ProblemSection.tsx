const problems = [
  {
    accent: "#F3B6A3",
    text: (
      <>
        "돌아가신 할머니의 통화 녹음은 있는데,
        <br />
        목소리가 너무 듣고 싶어도
        <br />
        듣기에 마음이 너무 아파요."
      </>
    ),
    author: "— 20대 손자",
  },
  {
    accent: "#F1C99C",
    text: (
      <>
        "가족들에게 남기고 싶은 말이
        <br />
        너무 많지만,
        <br />
        방법이 마땅치 않아요."
      </>
    ),
    author: "— 80대 할머니",
  },
  {
    accent: "#A8E9D3",
    text: (
      <>
        "기억을 잃어가는 우리 엄마의
        <br />
        지금 모습을
        <br />
        남기고 싶어요."
      </>
    ),
    author: "— 50대 딸",
  },
];

const ProblemSection = () => {
  return (
    <section
      id="service"
      className="relative overflow-hidden px-6 py-28 md:py-36"
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#FFF4CE]/60 blur-[130px]" />

        <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#D8FFEC]/70 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1320px]">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#A8E8D2] bg-white/80 px-4 py-2 text-[12px] font-semibold text-[#0B9A67] shadow-sm">
            <span className="h-[5px] w-[5px] rounded-full bg-[#1ECC8A]" />
            WHAT TO SOLVE
          </span>
        </div>

        {/* Title */}
        <div className="mt-7 text-center">
          <h2 className="text-[30px] font-bold leading-[1.35] tracking-[-0.04em] text-[#20211F] md:text-[40px] lg:text-[44px]">
            수천 장의 사진과 수십 시간의 녹음이 남았지만,
            <br className="hidden md:block" />
            다시 열어보지 않습니다
          </h2>

          <p className="mt-7 text-[15px] text-[#92948D] md:text-[16px]">
            열어보기 싫어서가 아니라, 방법이 없어서입니다.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="min-h-[200px] rounded-[24px] border border-[#E9E9E4] bg-white/95 p-8 shadow-[0_12px_35px_rgba(40,50,40,0.06)] md:p-9"
            >
              <div
                className="mb-5 h-[3px] w-7 rounded-full"
                style={{ backgroundColor: problem.accent }}
              />

              <p className="text-[15px] leading-[2] text-[#666861]">
                {problem.text}
              </p>

              <p className="mt-5 text-[14px] text-[#A0A39B]">
                {problem.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
