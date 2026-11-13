import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  robots: { index: false },
};

/** TODO Q12: tinjau dan setujui isi halaman ini bersama pemilik klinik sebelum rilis. */
export default function PrivasiPage() {
  return (
    <>
      <PageHeader eyebrow="Kebijakan privasi" title="Privasi pengunjung website" />
      <div className="mx-auto max-w-3xl space-y-6 px-4 pb-20 text-ink-800 sm:px-6">
        <p>
          Website {site.name} tidak memiliki formulir dan tidak mengumpulkan data pribadi atau data medis pengunjung secara
          langsung.
        </p>
        <h2 className="pt-4 text-xl font-medium text-ink-900">Layanan pihak ketiga</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">WhatsApp</strong>: tombol janji temu membuka WhatsApp. Percakapan Anda dengan kami
            tunduk pada kebijakan privasi WhatsApp.
          </li>
          <li>
            <strong className="font-medium">Google Maps</strong>: peta lokasi ditampilkan dari Google Maps dan tunduk pada
            kebijakan privasi Google.
          </li>
        </ul>
        <h2 className="pt-4 text-xl font-medium text-ink-900">Kontak</h2>
        <p>
          Pertanyaan tentang privasi dapat disampaikan ke {site.phoneDisplay} (WhatsApp/telepon).
        </p>
      </div>
    </>
  );
}
