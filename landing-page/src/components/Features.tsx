const features = [
  {
    title: "Feature 01",
    description:
      "서비스의 첫 번째 핵심 기능에 대한 설명을 작성합니다.",
  },
  {
    title: "Feature 02",
    description:
      "서비스의 두 번째 핵심 기능에 대한 설명을 작성합니다.",
  },
  {
    title: "Feature 03",
    description:
      "서비스의 세 번째 핵심 기능에 대한 설명을 작성합니다.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold text-gray-500">
            FEATURES
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            필요한 기능을 한 곳에서
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-500">
            복잡한 과정 없이 필요한 기능을 쉽고 빠르게 사용할 수 있습니다.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-6 h-12 w-12 rounded-xl bg-gray-100" />

              <h3 className="mb-3 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="leading-relaxed text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;