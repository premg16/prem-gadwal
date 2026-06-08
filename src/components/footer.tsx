export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-6 border-t border-border">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between">
        <span className="text-xs text-faint font-mono">Prem Sai Gadwal</span>
        <span className="text-xs text-faint font-mono">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
