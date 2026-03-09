import { Button } from "@/components/ui/button"
import { TypographyH1 } from "@/components/ui/typography-h1";
import { TypographyH3 } from "@/components/ui/typography-h3";

export default function Home() {
  return (
    <div>
      <main >
        <TypographyH1>
          Hello world
        </TypographyH1>
        <TypographyH3>
          Hello world
        </TypographyH3>
        <Button variant="secondary">Button</Button>
      </main>
    </div>
  );
}
