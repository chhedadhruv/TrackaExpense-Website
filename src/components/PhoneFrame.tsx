import Image from 'next/image';

/**
 * The store screenshots already contain a device frame and a caption, so this only
 * rounds the corners and adds a shadow. Keep the 9:16 ratio of the source images.
 */
export function PhoneFrame({
  src,
  alt,
  className = '',
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative mx-auto aspect-[9/16] w-full max-w-[300px] overflow-hidden rounded-[1.6rem] border border-border bg-surface-muted shadow-phone ${className}`}
    >
      <Image src={src} alt={alt} fill sizes="300px" priority={priority} className="object-cover" />
    </div>
  );
}
