const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-xl font-bold">
          LOGO
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-gray-600 transition hover:text-black"
          >
            Features
          </a>

          <a
            href="#about"
            className="text-sm text-gray-600 transition hover:text-black"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm text-gray-600 transition hover:text-black"
          >
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#cta"
          className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          시작하기
        </a>
      </div>
    </header>
  );
};

export default Header;