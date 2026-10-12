type StatCardProps = {
  value: string;
  label: string;
};

export const StatCard = ({ value, label }: StatCardProps) => (
  <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
    <p className="text-2xl font-semibold text-white">{value}</p>
    <p className="mt-1 text-sm leading-5 text-slate-400">{label}</p>
  </div>
);
