import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-section-sm bg-primary px-page-x font-sans">
      <h1 className="font-black text-display text-light uppercase">404</h1>
      <p className="font-black text-h5 text-light uppercase">
        This page doesn't exist.
      </p>
      <Button asChild className="bg-dark font-bold text-h5 text-light">
        <Link href="/">Back home</Link>
      </Button>
    </div>
  );
}
