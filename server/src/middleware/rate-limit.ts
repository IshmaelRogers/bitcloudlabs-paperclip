import rateLimit from "express-rate-limit";

export const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Rate limit exceeded" },
});

export const publicWebhookRateLimit = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  limit: 60,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Rate limit exceeded" },
});

export const defaultRateLimit = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  limit: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Rate limit exceeded" },
});
