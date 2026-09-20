const Footer = () => {
  return (
    <footer id="contact" className="border-t border-gray-200 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-bold">
            LOGO
          </p>

          <p className="mt-2 text-sm text-gray-500">
            © 2026 Your Service. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="transition hover:text-black">
            이용약관
          </a>

          <a href="#" className="transition hover:text-black">
            개인정보처리방침
          </a>

          <a href="#" className="transition hover:text-black">
            문의하기
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;