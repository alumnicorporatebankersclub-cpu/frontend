import Image from "next/image";
import { cn } from "@/lib/utils";
import { Crest } from "./brand";

interface MediaFrameProps {
  src?: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}

/**
 * Image slot used for featured images and portraits. Shows the photo when `src` is set;
 * until then, a warm toned placeholder with a faint crest, so layouts read correctly.
 */
export function MediaFrame({ src, alt, sizes, className, priority = false }: MediaFrameProps) {
  return (
    <div className={cn("relative overflow-hidden bg-stone", className)}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div role="img" aria-label={alt} className="absolute inset-0 grid place-items-center bg-linear-to-br from-[#ece8df] to-[#d9d3c6]">
          <Crest size={96} decorative className="w-1/4 max-w-24 rounded-full opacity-25 grayscale" />
        </div>
      )}
    </div>
  );
}
