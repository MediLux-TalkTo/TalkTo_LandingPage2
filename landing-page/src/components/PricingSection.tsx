const plans = [
  {
    name: "Archive",
    price: "무료",
    description: (
      <>
        가족의 목소리·영상·사진을
        <br />
        안전하게 보관합니다.
      </>
    ),
  },
  {
    name: "Memories",
    price: "3,900원",
    unit: "월·초기 가족 요금 ",
    description: (
      <>
        내 기억을 계속 쌓아
        <br />
        페르소나를 키웁니다.
        <br />
        목소리 대답 월 30번
      </>
    ),
  },
  {
    name: "Family",
    price: "9,900원",
    unit: "월·초기 가족 요금",
    recommended: true,
    description: (
      <>
        가족 6명이 함께 대화하고,
        <br />
        함께 기억을 채웁니다.
        <br />
        목소리 대답 월 200번
      </>
    ),
  },
  {
    name: "Premium",
    price: "문의하기",
    contact: true,
    description: (
      <>
        컨시어지로 직접 만들어 드립니다.
        <br />
        카카오톡 채널로 문의해주세요.
      </>
    ),
  },
];

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden px-6 pb-36 pt-24 md:pb-44 md:pt-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[200px] bottom-[-100px] h-[600px] w-[600px] rounded-full bg-[#DFFFF1]/70 blur-[150px]" />

        <div className="absolute -right-[150px] top-[50px] h-[600px] w-[600px] rounded-full bg-[#FFF2D7]/60 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1320px]">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#A8E8D2] bg-white/80 px-4 py-2 text-[12px] font-semibold text-[#0B9A67] shadow-sm">
            <span className="h-[5px] w-[5px] rounded-full bg-[#1ECC8A]" />
            PRICING
          </span>
        </div>

        {/* Heading */}
        <div className="mt-7 text-center">
          <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.04em] text-[#20211F] md:text-[42px]">
            지금 바로 무료로 기억을 모으고
            <br />
            페르소나를 만들어보세요
          </h2>

          <p className="mt-7 text-[15px] text-[#92948D] md:text-[16px]">
            7일 동안 무료로, 제작한 페르소나와 대화해보세요.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative min-h-[280px] rounded-[24px] bg-white p-8 transition duration-300 hover:-translate-y-1 ${
                plan.recommended
                  ? "border-2 border-[#20C989] shadow-[0_15px_40px_rgba(32,201,137,0.10)]"
                  : "border border-[#E8E8E3] shadow-[0_12px_35px_rgba(40,50,40,0.06)]"
              }`}
            >
              {/* Recommended */}
              {plan.recommended && (
                <span className="mb-3 inline-block rounded-full bg-[#20C989] px-3 py-1 text-[11px] font-bold text-white">
                  추천
                </span>
              )}

              <p className="text-[16px] font-medium text-[#85877F]">
                {plan.name}
              </p>

              <h3
                className={`mt-2 text-[29px] font-bold tracking-[-0.03em] ${
                  plan.contact ? "text-[#079760]" : "text-[#20211F]"
                }`}
              >
                {plan.price}
              </h3>

              {plan.unit && (
                <p className="mt-1 text-[12px] text-[#A5A79F]">{plan.unit}</p>
              )}

              <div className="my-6 h-px w-full bg-[#ECECE7]" />

              <p className="text-[14px] leading-[1.8] text-[#92948D]">
                {plan.description}
              </p>
            </div>
          ))}
        </div>

        {/* Notice */}
        <p className="mt-8 text-center text-[12px] text-[#A2A49D]">
          구독료는 출시 가격 기준이며, 조정될 수 있어요.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
