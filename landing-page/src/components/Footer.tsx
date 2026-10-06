import talktoLogo from "../assets/talkto-logo.png";

const Footer = () => {
  return (
    <footer className="relative px-6 pb-10">
      <div className="mx-auto max-w-[1320px]">
        {/* Line */}
        <div className="h-px w-full bg-[#DFE5DC]" />

        <div className="flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <a href="#" className="inline-flex items-center">
            <img
              src={talktoLogo}
              alt="TalkTo"
              className="h-[28px] w-auto object-contain"
            />
          </a>

          {/* Copyright */}
          <p className="text-[12px] text-[#A1A39D]">
            © 2026 TalkTo · 베타 화면과 혜택은 운영 과정에서 일부 조정될 수
            있습니다.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
