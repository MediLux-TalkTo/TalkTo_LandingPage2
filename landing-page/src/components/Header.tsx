import talktoLogo from "../assets/talkto-logo.png";

const Header = () => {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-8 md:px-16 lg:px-20">
        {/* Logo */}
        <a href="#" className="inline-flex items-center">
          <img
            src={talktoLogo}
            alt="TalkTo"
            className="h-[32px] w-auto object-contain"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          <a
            href="#service"
            className="text-[15px] font-medium text-[#77776F] transition hover:text-[#16C784]"
          >
            서비스 소개
          </a>

          <a
            href="#how"
            className="text-[15px] font-medium text-[#77776F] transition hover:text-[#16C784]"
          >
            만드는 법
          </a>

          <a
            href="#pricing"
            className="text-[15px] font-medium text-[#77776F] transition hover:text-[#16C784]"
          >
            요금
          </a>

          <a
            href="#register"
            className="rounded-full bg-[#20C989] px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-[#18b87b]"
          >
            사전 등록하기
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
