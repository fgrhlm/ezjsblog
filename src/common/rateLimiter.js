import rateLimit from "express-rate-limit";

// https://www.npmjs.com/package/express-rate-limit

const limiter = rateLimit({
	// Ratelimit to max 120 requests / 10min
	// Does not return the standard 'rate-limited' headers.
	windowMs: 10 * 60 * 1000,
	max: 120, 
	standardHeaders: false, 
	legacyHeaders: false, 
})

export default limiter;