export function validate(schema) {
  return (req, res, next) => {
    // Joi
    if (typeof schema.validate === 'function') {
      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({ success: false, message: error.details[0].message });
      }
      return next();
    }
    // Zod
    if (typeof schema.safeParse === 'function') {
      const result = schema.safeParse(req.body);
      if (!result.success && result.error) {
        const messages = Array.isArray(result.error?.errors)
          ? result.error.errors.map((e) => e.message).join(', ')
          : 'Validation failed';
        return res.status(400).json({ success: false, message: messages });
      }
      return next();
    }
    // Unknown schema type
    return res.status(500).json({ success: false, message: 'Invalid schema type' });
  };
}
