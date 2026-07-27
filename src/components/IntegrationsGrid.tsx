import { integrations } from "@/data/integrations";
import { IntegrationCard } from "./IntegrationCard";

export function IntegrationsGrid() {
  return (
    <section className="mx-auto max-w-[1470px] px-5 pb-24 sm:px-8 lg:px-[224px]">
      <ul className="grid grid-cols-1 justify-center gap-[26px] sm:grid-cols-[repeat(2,325px)] lg:grid-cols-[repeat(3,325px)]">
        {integrations.map((integration) => (
          <li key={integration.slug}>
            <IntegrationCard integration={integration} />
          </li>
        ))}
      </ul>
    </section>
  );
}