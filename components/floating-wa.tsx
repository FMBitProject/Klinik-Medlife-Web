import { waLink } from "@/content/site";
import { WhatsAppIcon } from "./icons";

/** Tombol WA melayang. Ikon saja agar tidak menutupi konten di ponsel. */
export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      data-track="whatsapp-floating"
      aria-label="Chat WhatsApp Klinik Medlife"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E]"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
