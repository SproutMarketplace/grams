import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/page-header';
import { DollarSign, Package, Users, ShoppingCart, TrendingUp } from 'lucide-react';

const manufacturerKpis = [
  {
    title: 'Total Revenue',
    value: '$1,250,430',
    icon: DollarSign,
    change: '+12.5%',
    changeType: 'increase',
  },
  {
    title: 'Products Listed',
    value: '482',
    icon: Package,
    change: '+20 since last month',
    changeType: 'increase',
  },
  {
    title: 'Active Dispensaries',
    value: '78',
    icon: Users,
    change: '+5 new partners',
    changeType: 'increase',
  },
  {
    title: 'Pending Orders',
    value: '32',
    icon: ShoppingCart,
    change: '-3 since yesterday',
    changeType: 'decrease',
  },
];

const dispensaryKpis = [
    {
      title: 'Total Spend',
      value: '$480,920',
      icon: DollarSign,
      change: '+8.2% vs last quarter',
      changeType: 'increase',
    },
    {
      title: 'Open Orders',
      value: '15',
      icon: ShoppingCart,
      change: '5 awaiting shipment',
      changeType: 'neutral',
    },
    {
      title: 'Top Selling Category',
      value: 'Edibles',
      icon: TrendingUp,
      change: 'Flowers dropping to #2',
      changeType: 'neutral',
    },
    {
      title: 'Connected Manufacturers',
      value: '24',
      icon: Package,
      change: '+2 since last week',
      changeType: 'increase',
    },
  ];

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <PageHeader title="Dashboard" />

      <div className="space-y-6">
        <div>
            <h2 className="text-2xl font-bold tracking-tight text-accent mb-4">Manufacturer View</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {manufacturerKpis.map((kpi) => (
                <Card key={kpi.title} className="shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                    <kpi.icon className="h-4 w-4 text-muted-foreground text-accent" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{kpi.value}</div>
                    <p className="text-xs text-muted-foreground">{kpi.change}</p>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold tracking-tight text-accent mb-4">Dispensary View</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {dispensaryKpis.map((kpi) => (
                <Card key={kpi.title} className="shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                    <kpi.icon className="h-4 w-4 text-muted-foreground text-accent" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{kpi.value}</div>
                    <p className="text-xs text-muted-foreground">{kpi.change}</p>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}