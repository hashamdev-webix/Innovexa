import { Link } from "react-router-dom";

export default function Button({
  variant = "primary",
  size = "md",
  as = "button",
  to,
  href,
  children,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-brand/30";

  const variants = {
    primary: "bg-brand text-white hover:bg-brand-dark",
    secondary: "bg-accent text-white hover:bg-accent-dark",
    outline: "border-2 border-brand text-brand hover:bg-brand hover:text-white",
    ghost: "text-brand hover:text-brand-dark",
  };

  const sizes = {
    md: "px-6 py-3 text-[15px]",
    lg: "px-8 py-4 text-base",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
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
