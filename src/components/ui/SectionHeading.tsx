import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ subtitle, title, description }: SectionHeadingProps) {
  return (
    <AnimatedSection className="text-center mb-12 md:mb-16">
      {subtitle && (
        <p className="text-gold font-heading text-sm md:text-base tracking-[0.3em] uppercase mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
        {title}
      </h2>
      <div className="section-divider mb-4" />
      {description && (
        <p className="text-silver max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
