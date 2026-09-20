import phoneImage from "../assets/phone2.png";

const VoiceSection = () => {
  return (
    <section className="relative overflow-hidden px-6 pb-36 pt-20 md:pb-44 md:pt-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[150px] bottom-[-100px] h-[550px] w-[550px] rounded-full bg-[#DCFFEA]/70 blur-[140px]" />

        <div className="absolute right-[-150px] top-[50px] h-[600px] w-[600px] rounded-full bg-[#E4FFF1]/60 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Phone */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={phoneImage}
              alt="TalkTo 목소리 녹음 업로드 화면"
              className="w-full max-w-[390px] object-contain drop-shadow-[0_30px_35px_rgba(30,70,50,0.13)] md:max-w-[430px]"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-6">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-[#A8E8D2] bg-white/80 px-4 py-2 text-[12px] font-semibold text-[#0B9A67] shadow-sm">
              <span className="h-[5px] w-[5px] rounded-full bg-[#1ECC8A]" />
              VOICE
            </span>

            <h2 className="mt-7 text-[34px] font-bold leading-[1.3] tracking-[-0.04em] text-[#20211F] md:text-[42px]">
              목소리 1분이면 됩니다
            </h2>

            <p className="mt-7 max-w-[720px] text-[15px] leading-[2] text-[#898C84] md:text-[16px]">
              짧은 낭독문을 읽어주셔도 좋고, 가지고 계신 통화 녹음이나 영상,
              음성 메시지를 올려주셔도 좋습니다. 어떤 목소리든 괜찮습니다. 여러
              사람의 목소리가 함께 담겨 있어도, 그 안에서 남기고 싶은 목소리만
              찾아 담습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceSection;
