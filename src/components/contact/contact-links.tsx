import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import type { ContactLink } from "@/lib/types";

/** `sms:` and `mailto:` must open in place; only web URLs get a new tab. */
function isExternalUrl(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

/**
 * The direct-contact column.
 *
 * Each logo sits on a white tile rather than bare on the panel. The source
 * images are a mix of transparent and white-backed artwork — GitHub's is black
 * on opaque white — so without a tile they would render inconsistently and the
 * dark-theme page would show one accidental white square among three floating
 * logos. The tile makes that deliberate and keeps all four legible in both
 * themes, where a raw logo's contrast would flip with the ground.
 */
export function ContactLinks({ contacts }: { contacts: readonly ContactLink[] }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-3 p-0">
      {contacts.map((contact, index) => (
        <Reveal key={contact.name} delay={Math.min(index * 0.04, 0.16)}>
          <li>
            <a
              href={contact.href}
              {...(isExternalUrl(contact.href)
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="panel flex items-center gap-3.5 px-5 py-[18px] text-base transition-[border-color,transform] duration-200 hover:translate-x-1 hover:border-accent-600"
            >
              <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-md bg-white p-1">
                <Image
                  src={contact.image}
                  alt=""
                  width={26}
                  height={26}
                  className="h-auto w-full object-contain"
                />
              </span>

              <span className="min-w-0 flex-1 font-medium">{contact.name}</span>

              <span className="shrink-0 text-[13px] text-tone-500">{contact.detail}</span>
            </a>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}
