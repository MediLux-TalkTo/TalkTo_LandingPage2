import phoneImage from "../assets/phone3.png";

const MemoriesSection = () => {
  return (
    <section className="relative overflow-hidden px-6 pb-32 pt-24 md:pb-40 md:pt-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[180px] top-[40px] h-[600px] w-[600px] rounded-full bg-[#DFFFE8]/70 blur-[150px]" />

        <div className="absolute -right-[180px] bottom-[-100px] h-[600px] w-[600px] rounded-full bg-[#FFF1D6]/60 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid items-center gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          {/* Left Text */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#A8E8D2] bg-white/80 px-4 py-2 text-[12px] font-semibold text-[#0B9A67] shadow-sm">
              <span className="h-[5px] w-[5px] rounded-full bg-[#1ECC8A]" />
              MEMORIES
            </span>

            <h2 className="mt-7 text-[34px] font-bold leading-[1.3] tracking-[-0.04em] text-[#20211F] md:text-[42px]">
              기억은 질문에서 나옵니다
            </h2>

            <p className="mt-7 max-w-[720px] text-[15px] leading-[2] text-[#898C84] md:text-[16px]">
              고향, 자주 하시던 말, 가장 행복했던 순간 — 준비된 질문에 목소리로
              답하기만 하면 됩니다. 말하면 글로 옮겨지고, 답하기 어려운 질문은
              건너뛰어도 괜찮습니다. 대화가 쌓일수록 페르소나는 더 그
              사람다워집니다.
            </p>
          </div>

          {/* Phone */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={phoneImage}
              alt="TalkTo 기억 입력 화면"
              className="w-full max-w-[390px] object-contain drop-shadow-[0_30px_35px_rgba(30,70,50,0.13)] md:max-w-[430px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
