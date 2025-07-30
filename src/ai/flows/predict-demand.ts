// PredictDemand Story: As a manufacturer, I want to use AI to predict the demand for my products based on historical sales data and market trends, so I can optimize my production and inventory.

'use server';

/**
 * @fileOverview Predicts product demand for manufacturers using historical sales data and market trends.
 *
 * - predictDemand - Predicts demand based on historical data and market trends.
 * - PredictDemandInput - The input type for the predictDemand function.
 * - PredictDemandOutput - The return type for the predictDemand function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PredictDemandInputSchema = z.object({
  historicalSalesData: z.string().describe('Historical sales data in JSON format.'),
  marketTrends: z.string().describe('Current market trends in JSON format.'),
  productCategory: z.string().describe('Category of the product.'),
  timeframe: z.string().describe('Timeframe for the demand prediction (e.g., next month, next quarter).'),
});
export type PredictDemandInput = z.infer<typeof PredictDemandInputSchema>;

const PredictDemandOutputSchema = z.object({
  predictedDemand: z.number().describe('The predicted demand for the product.'),
  confidenceLevel: z.number().describe('The confidence level of the prediction (0-1).'),
  explanation: z.string().describe('Explanation of the factors influencing the prediction.'),
});
export type PredictDemandOutput = z.infer<typeof PredictDemandOutputSchema>;

export async function predictDemand(input: PredictDemandInput): Promise<PredictDemandOutput> {
  return predictDemandFlow(input);
}

const prompt = ai.definePrompt({
  name: 'predictDemandPrompt',
  input: {schema: PredictDemandInputSchema},
  output: {schema: PredictDemandOutputSchema},
  prompt: `You are an expert in demand forecasting, specializing in the cannabis industry.
  Based on the historical sales data, market trends, product category, and timeframe, predict the demand for the product.

  Historical Sales Data: {{{historicalSalesData}}}
  Market Trends: {{{marketTrends}}}
  Product Category: {{{productCategory}}}
  Timeframe: {{{timeframe}}}

  Consider the following factors:
  - Seasonality
  - Price trends
  - Competitor activity
  - Regulatory changes

  Provide the predicted demand, confidence level (0-1), and an explanation of the factors influencing the prediction.
  Format your response as a JSON object conforming to the PredictDemandOutputSchema schema.
  `,
});

const predictDemandFlow = ai.defineFlow(
  {
    name: 'predictDemandFlow',
    inputSchema: PredictDemandInputSchema,
    outputSchema: PredictDemandOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
