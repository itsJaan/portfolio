type TagProps = {
  label: string;
  size?: 'sm' | 'md';
};

export const Tag = ({ label, size = 'sm' }: TagProps) => (
  <span
    className={`rounded-full border border-white/10 bg-slate-900/70 text-slate-300 ${
      size === 'sm' ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm text-slate-200'
    }`}
  >
    {label}
  </span>
);

export const TagList = ({ items, size = 'sm' }: { items: string[]; size?: 'sm' | 'md' }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <Tag key={item} label={item} size={size} />
    ))}
  </div>
);
