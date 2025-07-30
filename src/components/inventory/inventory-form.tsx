"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  getInventoryRecommendations,
  type InventoryRecommendationsOutput,
} from "@/ai/flows/inventory-recommendations";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Wand2 } from "lucide-react";

const formSchema = z.object({
  salesData: z.string().min(1, "Sales data is required."),
  customerPreferences: z.string().min(1, "Customer preferences are required."),
  complianceRestrictions: z.string().min(1, "Compliance restrictions are required."),
  currentInventory: z.string().min(1, "Current inventory is required."),
});

export function InventoryRecommendationsForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<InventoryRecommendationsOutput | null>(
    null
  );
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      salesData: `[{"product": "OG Kush", "unitsSold": 150}, {"product": "Blue Dream Vape", "unitsSold": 300}]`,
      customerPreferences: `{"preferredCategories": ["Vapes", "Edibles"], "topBrands": ["AeroVapes"]}`,
      complianceRestrictions: `{"THC_limit_mg": 100}`,
      currentInventory: `[{"product": "OG Kush", "stock": 20}, {"product": "Gummy Bears", "stock": 10}]`,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
      const output = await getInventoryRecommendations(values);
      setResult(output);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get recommendations. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Get Inventory Recommendations</CardTitle>
          <CardDescription>
            Use AI to suggest products to stock based on sales data, customer preferences, and compliance restrictions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="salesData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Historical Sales Data (JSON)</FormLabel>
                    <FormControl>
                      <Textarea rows={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="customerPreferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Customer Preferences (JSON)</FormLabel>
                    <FormControl>
                      <Textarea rows={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="complianceRestrictions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Compliance Restrictions (JSON)</FormLabel>
                    <FormControl>
                      <Textarea rows={2} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="currentInventory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Inventory (JSON)</FormLabel>
                    <FormControl>
                      <Textarea rows={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Get Recommendations
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-bold">AI Recommendations</h3>
        {loading && (
          <Card className="flex items-center justify-center p-8 shadow-md">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-4">Generating recommendations...</p>
          </Card>
        )}
        {result && (
          <Card className="shadow-lg bg-primary/10">
            <CardHeader>
              <CardTitle>Recommended Products to Stock</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2">Products:</h4>
                    <ul className="list-disc list-inside space-y-1">
                        {result.recommendedProducts.map((product, i) => <li key={i}>{product}</li>)}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Reasoning:</h4>
                    <p className="text-sm text-foreground/80 p-4 bg-background/50 rounded-md">{result.reasoning}</p>
                </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
