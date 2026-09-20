const steps = [
  {
    number: "01",
    title: "목소리를 담습니다",
    description: (
      <>
        1분의 목소리 녹음이면 충분합니다.
        <br />
        낭독문을 읽거나 가지고 있는 녹음을 올립니다.
      </>
    ),
    active: true,
  },
  {
    number: "02",
    title: "질문에 답합니다",
    description: (
      <>
        자신의, 혹은 사랑하는 가족과의 기억, 성격,
        <br />
        가치관, 자주 하는 말 등 23개 질문에 답합니다.
      </>
    ),
    active: false,
  },
  {
    number: "03",
    title: "페르소나 완성",
    description: (
      <>
        바로 대화 가능한 페르소나가 완성됩니다.
        <br />
        대화가 끝나면 부족한 기억에 대한 질문에 답해주세요.
      </>
    ),
    active: false,
  },
];

const HowItWorksSection = () => {
  return (
    <section
      id="how"
      className="relative overflow-hidden px-6 pb-20 pt-28 md:pt-36"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[200px] top-[100px] h-[600px] w-[600px] rounded-full bg-[#FFF1E8]/60 blur-[140px]" />

        <div className="absolute -right-[180px] top-[-100px] h-[600px] w-[600px] rounded-full bg-[#DCFFEA]/60 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1320px]">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#A8E8D2] bg-white/80 px-4 py-2 text-[12px] font-semibold text-[#0B9A67] shadow-sm">
            <span className="h-[5px] w-[5px] rounded-full bg-[#1ECC8A]" />
            HOW IT WORKS
          </span>
        </div>

        {/* Heading */}
        <div className="mt-7 text-center">
          <h2 className="text-[36px] font-bold tracking-[-0.04em] text-[#20211F] md:text-[44px]">
            15분이면 됩니다
          </h2>

          <p className="mt-6 text-[15px] text-[#92948D] md:text-[16px]">
            목소리 녹음을 하거나, 가지고 있는 목소리가 담긴 녹음을 올려주세요.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`min-h-[190px] rounded-[24px] p-8 md:p-9 ${
                step.active
                  ? "border border-[#59DDAA] bg-[#E9FFF4]"
                  : "border border-[#E8E8E3] bg-white/95 shadow-[0_12px_35px_rgba(40,50,40,0.05)]"
              }`}
            >
              <p
                className={`text-[23px] font-bold ${
                  step.active ? "text-[#079760]" : "text-[#D9D5CB]"
                }`}
              >
                {step.number}
              </p>

              <h3 className="mt-3 text-[19px] font-bold tracking-[-0.03em] text-[#20211F]">
                {step.title}
              </h3>

              <p className="mt-4 text-[14px] leading-[1.8] text-[#92948D]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
