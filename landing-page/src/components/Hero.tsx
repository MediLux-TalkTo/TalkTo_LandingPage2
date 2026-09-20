import phoneImage from "../assets/talkto-phone.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FFFCF4]">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[100px] top-[180px] h-[650px] w-[650px] rounded-full bg-[#D8FFE2]/70 blur-[120px]" />

        <div className="absolute right-[40px] top-[20px] h-[500px] w-[500px] rounded-full bg-[#FFF1C9]/70 blur-[120px]" />

        <div className="absolute -bottom-[150px] right-[100px] h-[550px] w-[550px] rounded-full bg-[#D9FFF0]/70 blur-[120px]" />
      </div>

      {/* Hero contents */}
      <div className="relative mx-auto flex min-h-screen max-w-[1440px] items-center px-8 pt-20 md:px-16 lg:px-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left */}
          <div className="relative z-10">
            <h1 className="text-[42px] font-bold leading-[1.35] tracking-[-0.04em] text-[#181A18] md:text-[52px] lg:text-[58px]">
              가장 듣고 싶은 목소리,
              <br />

              <span className="text-[#0A945A]">
                그 사람다움 그대로
              </span>
            </h1>

            <p className="mt-10 text-[17px] leading-[1.9] text-[#898B82]">
              목소리도, 말투도, 기억도.
              <br />
              누군지 자신의, 그리고 가족의 목소리와 기억으로
              <br />
              AI 페르소나를 만들어 가족에게 남기는 플랫폼입니다.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#register"
                className="flex h-[58px] items-center justify-center rounded-full bg-[#20C989] px-8 text-[17px] font-bold text-white shadow-[0_10px_25px_rgba(32,201,137,0.25)] transition hover:-translate-y-0.5 hover:bg-[#18B87B]"
              >
                사전 등록하기
              </a>

              <a
                href="#kakao"
                className="flex h-[58px] items-center justify-center gap-3 rounded-full bg-[#FFE500] px-8 text-[17px] font-bold text-[#241F20] shadow-[0_10px_25px_rgba(255,229,0,0.20)] transition hover:-translate-y-0.5"
              >
                {/* Kakao bubble */}
                <span className="flex h-5 w-5 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M12 3C6.5 3 2 6.5 2 10.8c0 2.8 1.9 5.2 4.7 6.6L5.5 21l4.2-2.4c.7.1 1.5.2 2.3.2 5.5 0 10-3.5 10-8S17.5 3 12 3Z" />
                  </svg>
                </span>

                카카오톡 채널 추가하기
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 flex items-start">
              <div className="pr-9">
                <p className="text-[20px] font-bold text-[#1B1C1B]">
                  15분
                </p>
                <p className="mt-1 text-[13px] text-[#A0A29B]">
                  페르소나 제작 소요시간
                </p>
              </div>

              <div className="h-12 w-px bg-[#DCDDD7]" />

              <div className="pl-9">
                <p className="text-[20px] font-bold text-[#1B1C1B]">
                  1분
                </p>
                <p className="mt-1 text-[13px] text-[#A0A29B]">
                  필요한 목소리 녹음 시간
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <img
              src={phoneImage}
              alt="TalkTo AI 페르소나 대화 화면"
              className="w-full max-w-[500px] object-contain drop-shadow-[0_30px_30px_rgba(20,60,40,0.15)] lg:max-w-[530px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;