const faqs = [
  {
    question: "목소리는 얼마나 필요한가요?",
    answer:
      "1분이면 충분합니다. 짧은 낭독문을 읽어주셔도 되고, 가지고 계신 통화 녹음이나 영상을 올려주셔도 됩니다.",
  },
  {
    question: "실제 사람의 목소리인가요?",
    answer:
      "동의를 받은 목소리를 바탕으로 만든 AI 합성 음성입니다. 화면과 음성에 AI임을 표시합니다.",
  },
  {
    question: "기억에 없는 것도 말하나요?",
    answer:
      "아니요. 기록에 있는 것만 말하고, 모르는 것은 모른다고 답합니다.",
  },
  {
    question: "올린 녹음은 안전한가요?",
    answer:
      "암호화해서 보관하고, 원하실 때 언제든 파일 단위로 삭제할 수 있습니다.",
  },
  {
    question: "돌아가신 분의 페르소나도 만들 수 있나요?",
    answer:
      "가능합니다. 다만 유족 대표의 동의와 증빙 확인 절차를 거친 뒤에 제작됩니다.",
  },
];

const FAQSection = () => {
  return (
    <section
      id="faq"
      className="relative overflow-hidden px-6 pb-32 pt-28 md:pb-40 md:pt-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[200px] top-[50px] h-[600px] w-[600px] rounded-full bg-[#DFFFF0]/60 blur-[150px]" />

        <div className="absolute -right-[200px] top-[100px] h-[600px] w-[600px] rounded-full bg-[#F2FFE0]/50 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1040px]">
        <h2 className="text-center text-[32px] font-bold tracking-[-0.04em] text-[#20211F] md:text-[40px]">
          자주 묻는 질문
        </h2>

        <div className="mt-14 flex flex-col gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[22px] border border-[#E7E8E2] bg-white/95 px-7 py-6 shadow-[0_10px_30px_rgba(40,50,40,0.04)] md:px-8"
            >
              <h3 className="text-[16px] font-bold tracking-[-0.02em] text-[#292A28]">
                {faq.question}
              </h3>

              <p className="mt-2 text-[14px] leading-[1.8] text-[#92948D]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;