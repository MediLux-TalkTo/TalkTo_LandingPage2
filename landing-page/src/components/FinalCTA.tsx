const FinalCTA = () => {
  return (
    <section
      id="register"
      className="relative overflow-hidden px-6 pb-24 pt-20 md:pb-28 md:pt-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[0px] h-[500px] w-[500px] rounded-full bg-[#DFFFF0]/70 blur-[150px]" />

        <div className="absolute right-[5%] top-[50px] h-[500px] w-[500px] rounded-full bg-[#FFF5D9]/50 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[900px] text-center">
        <h2 className="text-[34px] font-bold leading-[1.35] tracking-[-0.04em] text-[#20211F] md:text-[44px]">
          오늘의 목소리가,
          <br />
          내일의 가장 소중한 기억이 되도록
        </h2>

        <p className="mt-7 text-[15px] text-[#92948D] md:text-[16px]">
          지금 사전 등록하시면 베타 오픈 소식을 가장 먼저 알려드립니다.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Pre-register */}
          <a
            href="#"
            className="flex h-[58px] items-center justify-center rounded-full bg-[#20C989] px-9 text-[16px] font-bold text-white shadow-[0_10px_25px_rgba(32,201,137,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#18B87B]"
          >
            사전 등록하기
          </a>

          {/* Kakao */}
          <a
            href="http://pf.kakao.com/_nNwwX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[58px] items-center justify-center gap-3 rounded-full bg-[#FFE500] px-9 text-[16px] font-bold text-[#241F20] shadow-[0_10px_25px_rgba(255,229,0,0.22)] transition duration-200 hover:-translate-y-0.5"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
              aria-hidden="true"
            >
              <path d="M12 3C6.5 3 2 6.5 2 10.8c0 2.8 1.9 5.2 4.7 6.6L5.5 21l4.2-2.4c.7.1 1.5.2 2.3.2 5.5 0 10-3.5 10-8S17.5 3 12 3Z" />
            </svg>
            카카오톡 채널 추가하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
