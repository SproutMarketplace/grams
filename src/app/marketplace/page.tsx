import Image from 'next/image';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { products } from '@/lib/data';
import { Filter, PlusCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function MarketplacePage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <PageHeader
        title="Marketplace"
        actions={
          <div className="flex items-center gap-2">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              New Order
            </Button>
          </div>
        }
      />
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-2">
            <Input placeholder="Search products..." className="max-w-sm" />
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="flower">Flower</SelectItem>
                    <SelectItem value="vapes">Vapes</SelectItem>
                    <SelectItem value="edibles">Edibles</SelectItem>
                    <SelectItem value="tinctures">Tinctures</SelectItem>
                    <SelectItem value="pre-rolls">Pre-Rolls</SelectItem>
                    <SelectItem value="concentrates">Concentrates</SelectItem>
                </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" /> Filter
            </Button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col overflow-hidden shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  data-ai-hint={product.aiHint}
                />
              </div>
              <div className="p-4">
                <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                <CardTitle className="text-lg font-headline">{product.name}</CardTitle>
                <p className="text-sm text-foreground/80">{product.manufacturer}</p>
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-4 pt-0">
              <div className="flex justify-between text-sm">
                <span>THC:</span>
                <span className="font-semibold">{product.thc}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>CBD:</span>
                <span className="font-semibold">{product.cbd}</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>Stock:</span>
                <span className="font-semibold">{product.stock} units</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full" variant="outline">
                <PlusCircle className="mr-2 h-4 w-4" /> Add to Order
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
