import { SecondaryLink, WaButton } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <p className="text-6xl font-normal tracking-tight text-brand-700">404</p>
      <h1 className="mt-4 text-2xl font-medium text-ink-900">Halaman tidak ditemukan</h1>
      <p className="mt-2 text-ink-600">Halaman yang Anda cari tidak ada atau sudah dipindahkan.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <SecondaryLink href="/">Kembali ke beranda</SecondaryLink>
        <WaButton />
      </div>
    </div>
  );
}
