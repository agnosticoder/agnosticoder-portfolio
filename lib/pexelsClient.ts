import { createClient } from "pexels";

const pexelsApiKey = process.env.NEXT_PUBLIC_PEXELS_API_KEY || '';
export const pexelClient = createClient(pexelsApiKey);
