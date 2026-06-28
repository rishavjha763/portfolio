import { useCursor } from '@/hooks';
export default function CustomCursor() {
  useCursor();
  return (
    <>
      <div className="c-dot"  aria-hidden="true" />
      <div className="c-ring" aria-hidden="true" />
    </>
  );
}
