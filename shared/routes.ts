import { z } from 'zod';

export const api = {
  // No persistent API routes needed for purely client-side version
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  return path;
}
