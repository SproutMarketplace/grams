import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { procurementRequests } from '@/lib/data';
import { PlusCircle, Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export default function ProcurementPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <PageHeader
        title="Procurement Opportunities"
        actions={
          <div className="flex items-center gap-2">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Post a Request
            </Button>
          </div>
        }
      />
      <div className="prose prose-stone max-w-full">
        <p>
            As a grower, this is your hub to find opportunities. Below is a list of requests from dispensaries and manufacturers looking for specific products. Connect with them to fulfill their needs and grow your business.
        </p>
      </div>
       <div className="flex items-center justify-between">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
                placeholder="Search by flower, company..."
                className="pl-8"
            />
          </div>
        </div>
      <div className="rounded-md border shadow-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Looking For</TableHead>
              <TableHead>Strain</TableHead>
              <TableHead>Quantity (lbs)</TableHead>
              <TableHead>Price Point ($/lb)</TableHead>
              <TableHead>Submitted By</TableHead>
              <TableHead>Company Type</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {procurementRequests.map((req) => (
              <TableRow key={req.id}>
                <TableCell className="font-medium">{req.product}</TableCell>
                <TableCell>{req.strain}</TableCell>
                <TableCell>{req.quantity}</TableCell>
                <TableCell>${req.pricePoint.toFixed(2)}</TableCell>
                <TableCell>{req.submittedBy}</TableCell>
                <TableCell>
                  <Badge variant={req.companyType === 'Dispensary' ? 'secondary' : 'outline'}>
                    {req.companyType}
                  </Badge>
                </TableCell>
                <TableCell>
                    <Button variant="outline" size="sm">Connect</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
