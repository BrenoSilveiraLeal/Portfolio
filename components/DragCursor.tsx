// Cursor decorativo (como no vídeo de referência): quando o bloco pai com
// data-motion entra na tela, a setinha chega, "agarra" o bloco, puxa ele para
// o lugar e vai embora. Só CSS — ver .drag-cursor em app/site.css.
export function DragCursor({ label, tone = 'accent', className = '' }: { label: string; tone?: 'accent' | 'light'; className?: string }) {
  return <span className={`drag-cursor drag-cursor-${tone} ${className}`} aria-hidden="true">
    <svg viewBox="0 0 24 24"><path d="M4 2.5 20 11l-7 1.6L9.6 20z" /></svg>
    <span>{label}</span>
  </span>;
}
