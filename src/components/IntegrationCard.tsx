import Link from "next/link";
import type { Integration } from "@/data/integrations";

export function IntegrationCard({ integration }: { integration: Integration }) {
  const { name, description, href, icon } = integration;

  return (
    <Link
      href={href}
      className="group flex h-[370.391px] flex-col overflow-hidden rounded-xl border border-border-c bg-bg-card transition-colors hover:border-border-hover hover:bg-bg-card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
    >
      <div className="flex h-[240px] items-center justify-center">
        <img src={icon} alt="" className="h-[84px] w-[84px] object-contain" />
      </div>

      <div className="relative h-[128.391px] border-t border-border-c px-6 py-5">
        <div className="max-w-[calc(100%-46px)]">
          <p className="text-sm text-[#8A8F98]">{name}</p>
          <p className="mt-1 line-clamp-2 text-[17px] font-[510] leading-[1.4] text-[#F7F8F8]">
            {description}
          </p>
        </div>

        <span
          aria-hidden="true"
          className="absolute right-4 top-[calc(50%+8px)] -translate-y-1/2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-c text-[#8A8F98] transition-colors group-hover:border-border-hover group-hover:text-[#F7F8F8]"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M4 2.5 8 6l-4 3.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}