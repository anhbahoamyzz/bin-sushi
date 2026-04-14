import { cn } from "@/lib/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium tracking-wider uppercase transition-all duration-300 rounded-sm";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/20",
    outline: "border border-gold text-gold hover:bg-gold hover:text-dark",
    gold: "bg-gold text-dark hover:bg-gold-light shadow-lg shadow-gold/20",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
