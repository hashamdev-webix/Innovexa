import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <Section>
      <div className="text-center py-20">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-ink mb-4">
          404
        </h1>
        <p className="text-xl text-slate mb-8">Page not found</p>
        <Button variant="primary" size="lg" to="/">
          Back to Home
        </Button>
      </div>
    </Section>
  );
}
