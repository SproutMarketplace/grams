import { config } from 'dotenv';
config();

import '@/ai/flows/predict-demand.ts';
import '@/ai/flows/inventory-recommendations.ts';