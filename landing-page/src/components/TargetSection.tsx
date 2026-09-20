const targets = [
  {
    eyebrow: "나 자신은",
    title: (
      <>
        지금의 나의
        <br />
        기억과 목소리로
      </>
    ),
    description: (
      <>
        15분, 질문들에 목소리로 답하면 나의 기억과 말투, 목소리가 담긴 AI
        페르소나를 가족들을 위해 남길 수 있습니다.
      </>
    ),
    highlight: true,
  },
  {
    eyebrow: "사별을 겪은 가족은",
    title: (
      <>
        이별 이전의
        <br />
        목소리와 기억을
      </>
    ),
    description: (
      <>
        간직해 온 녹음과 영상 속 목소리로 페르소나를 만들고 다시 대화를 나눌 수
        있습니다.
      </>
    ),
  },
  {
    eyebrow: "치매 진단을 받은 가족은",
    title: (
      <>
        건강한
        <br />
        오늘의 모습을
      </>
    ),
    description: <>목소리와 기억을 담아 가족들에게 남깁니다.</>,
  },
  {
    eyebrow: "어린 자녀의 부모는",
    title: (
      <>
        훌쩍 크기 전,
        <br />
        아이의 한 시절을
      </>
    ),
    description: <>사진에 담기지 않는 목소리와 말버릇, 생각까지 남깁니다.</>,
  },
];

const TargetSection = () => {
  return (
    <section
      id="how"
      className="relative overflow-hidden px-6 pb-36 pt-28 md:pb-44 md:pt-36"
    >
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[150px] top-[50px] h-[600px] w-[600px] rounded-full bg-[#E6FFD9]/50 blur-[140px]" />

        <div className="absolute right-[-100px] top-[200px] h-[600px] w-[600px] rounded-full bg-[#FFF0D2]/60 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1320px]">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#A8E8D2] bg-white/80 px-4 py-2 text-[12px] font-semibold text-[#0B9A67] shadow-sm">
            <span className="h-[5px] w-[5px] rounded-full bg-[#1ECC8A]" />
            WHO IT IS FOR
          </span>
        </div>

        {/* Heading */}
        <div className="mt-7 text-center">
          <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.04em] text-[#20211F] md:text-[40px] lg:text-[44px]">
            누구든지 목소리와 기억을 담아
            <br />
            페르소나를 남깁니다
          </h2>

          <p className="mx-auto mt-7 max-w-[550px] text-[15px] leading-[1.8] text-[#92948D] md:text-[16px]">
            자신의, 사랑하는 가족의, 하늘로 떠나신 가족의
            <br className="hidden md:block" />
            기억 속 모습 그대로 다시 대화를 나눌 수 있습니다.
          </p>
        </div>

        {/* Target Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {targets.map((target, index) => (
            <div
              key={index}
              className={`min-h-[250px] rounded-[24px] p-7 transition duration-300 hover:-translate-y-1 ${
                target.highlight
                  ? "border border-[#65DDB0] bg-[#E9FFF4]"
                  : "border border-[#E8E8E3] bg-white/95 shadow-[0_12px_35px_rgba(40,50,40,0.06)]"
              }`}
            >
              <p
                className={`text-[14px] font-semibold ${
                  target.highlight ? "text-[#079760]" : "text-[#777A72]"
                }`}
              >
                {target.eyebrow}
              </p>

              <h3 className="mt-3 text-[22px] font-bold leading-[1.4] tracking-[-0.03em] text-[#20211F]">
                {target.title}
              </h3>

              <p className="mt-5 text-[14px] leading-[1.8] text-[#92948D]">
                {target.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-10 flex justify-center">
          <div className="rounded-full border border-[#E8E8E3] bg-white px-8 py-4 text-center text-[14px] font-semibold text-[#363833] shadow-[0_8px_25px_rgba(40,50,40,0.06)]">
            누구나, 언제든지, 남기고 싶은 모습을 담아 다시 대화를 나눌 수 있는
            페르소나로 남깁니다
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
