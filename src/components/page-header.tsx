import type { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  actions?: ReactNode;
};

export function PageHeader({ title, actions }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between space-y-2">
      <h1 className="text-3xl font-bold tracking-tight font-headline">{title}</h1>
      {actions && <div className="flex items-center space-x-2">{actions}</div>}
    </div>
  );
}
