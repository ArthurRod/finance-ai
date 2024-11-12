import { isMatch } from "date-fns";
import { z } from "zod";

export const GenerateAiReportSchema = z.object({
  month: z.string().refine((value) => isMatch(value, "MM")),
});

export type GenerateAiReportInput = z.infer<typeof GenerateAiReportSchema>;
