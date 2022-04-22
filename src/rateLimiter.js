import rateLimit from "express-rate-limit";

const limiter = rateLimit({
	windowMs: 10 * 60 * 1000,
	max: 120, 
	standardHeaders: false, 
	legacyHeaders: false, 
})

export default limiter;