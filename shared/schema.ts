import { z } from "zod";

// We'll keep the feeling and intensity types for frontend state management,
// but we no longer need database tables or persistent storage.
export const releaseStateSchema = z.object({
  feeling: z.string().min(1, "Please enter a feeling"),
  intensityBefore: z.number().min(0).max(10),
  intensityAfter: z.number().min(0).max(10).optional(),
});

export type ReleaseState = z.infer<typeof releaseStateSchema>;
