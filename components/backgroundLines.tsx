export default function BackgroundLines() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-1 w-full mx-auto grid grid-cols-12 divide-x">
  {Array.from({ length: 12 }).map((_, i) => (
    <div key={i} className=""></div>
  ))}
</div>

  );
}
