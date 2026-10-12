import type { ProjectStatus } from '../../types';

const styles: Record<ProjectStatus, string> = {
  Production: 'bg-emerald-500/10 text-emerald-300 ring-emerald-400/20',
  Beta: 'bg-amber-500/10 text-amber-300 ring-amber-400/20',
  'In development': 'bg-sky-500/10 text-sky-300 ring-sky-400/20',
  Demo: 'bg-slate-500/10 text-slate-300 ring-slate-400/20',
};

export const StatusBadge = ({ status }: { status: ProjectStatus }) => (
  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ring-1 ${styles[status]}`}>
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {status}
  </span>
);
