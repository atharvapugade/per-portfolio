type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-10 text-center md:mb-14 sm:text-left">
      <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-indigo-300/85">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:mx-0 sm:text-[15px]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
