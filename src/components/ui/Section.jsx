export default function Section({
  bg = "white",
  id,
  className = "",
  children,
}) {
  const backgrounds = {
    white: "bg-white",
    cloud: "bg-cloud",
    brand: "bg-brand-dark text-white",
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgrounds[bg]} ${className}`}
    >
      <div className="container-x">{children}</div>
    </section>
  );
}
