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
import { documents } from '@/lib/data';
import { PlusCircle, File, MoreHorizontal, Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

export default function DocumentsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <PageHeader
        title="Document Hub"
        actions={
          <div className="flex items-center gap-2">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Upload Document
            </Button>
          </div>
        }
      />
       <div className="flex items-center justify-between">
          <Input
            placeholder="Filter documents..."
            className="max-w-sm"
          />
        </div>
      <div className="rounded-md border shadow-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Document Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Uploaded By</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell className="font-medium">{doc.name}</TableCell>
                <TableCell>
                  <Badge variant="outline">{doc.type}</Badge>
                </TableCell>
                <TableCell>{doc.uploadedBy}</TableCell>
                <TableCell>{doc.date}</TableCell>
                <TableCell>
                  <Badge variant={doc.status === 'Active' ? 'default' : 'secondary'} className={doc.status === 'Active' ? 'bg-green-600/20 text-green-800' : ''}>
                    {doc.status}
                  </Badge>
                </TableCell>
                <TableCell>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem className="gap-2"><Download className="h-4 w-4"/> Download</DropdownMenuItem>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Archive</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
