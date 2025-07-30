"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  predictDemand,
  type PredictDemandOutput,
} from "@/ai/flows/predict-demand";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Wand2 } from "lucide-react";
import { Progress } from "../ui/progress";

const formSchema = z.object({
  historicalSalesData: z.string().min(1, "Historical sales data is required."),
  marketTrends: z.string().min(1, "Market trends are required."),
  productCategory: z.string().min(1, "Product category is required."),
  timeframe: z.string().min(1, "Timeframe is required."),
});

export function DemandForecastingForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictDemandOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      historicalSalesData: `[{"date": "2023-01", "sales": 100}, {"date": "2023-02", "sales": 120}]`,
      marketTrends: `{"competitor_activity": "new_product_launch", "price_trends": "stable"}`,
      productCategory: "Vapes",
      timeframe: "Next Quarter",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
      const output = await predictDemand(values);
      setResult(output);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to predict demand. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Forecast Demand</CardTitle>
          <CardDescription>
            Fill in the details below to get an AI-powered demand prediction.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="historicalSalesData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Historical Sales Data (JSON)</FormLabel>
                    <FormControl>
                      <Textarea rows={5} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="marketTrends"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Market Trends (JSON)</FormLabel>
                    <FormControl>
                      <Textarea rows={5} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="productCategory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Category</FormLabel>
                      <Input {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="timeframe"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Timeframe</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a timeframe" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Next Month">Next Month</SelectItem>
                          <SelectItem value="Next Quarter">
                            Next Quarter
                          </SelectItem>
                          <SelectItem value="Next 6 Months">
                            Next 6 Months
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Predict Demand
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Prediction Result</h3>
        {loading && (
          <Card className="flex items-center justify-center p-8 shadow-md">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-4">Forecasting demand...</p>
          </Card>
        )}
        {result && (
          <Card className="shadow-lg bg-primary/10">
            <CardHeader>
              <CardTitle>Demand Forecast</CardTitle>
              <CardDescription>
                Prediction for {form.getValues("productCategory")} in the{" "}
                {form.getValues("timeframe")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-foreground/80">Predicted Demand</p>
                <p className="text-5xl font-bold text-primary">
                  {result.predictedDemand.toLocaleString()} units
                </p>
              </div>
              <div>
                <p className="text-sm text-foreground/80 mb-1">Confidence Level</p>
                <Progress value={result.confidenceLevel * 100} className="h-2"/>
                <p className="text-right text-sm font-bold">{Math.round(result.confidenceLevel * 100)}%</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Explanation:</h4>
                <p className="text-sm text-foreground/80 p-4 bg-background/50 rounded-md">{result.explanation}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
