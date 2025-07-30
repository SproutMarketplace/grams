import { PageHeader } from '@/components/page-header';
import { DemandForecastingForm } from '@/components/analytics/demand-form';

export default function AnalyticsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <PageHeader title="Demand Forecasting" />
      <div className="prose prose-stone max-w-full">
        <p>
          Leverage our AI-powered tool to predict future product demand. By analyzing historical sales data and current market trends, you can optimize your production schedules, manage inventory more effectively, and make data-driven decisions to stay ahead of the competition.
        </p>
      </div>
      <DemandForecastingForm />
    </div>
  );
}
