// config/env.ts
export const env = {
  RECAPTCHA_SITE_KEY: import.meta.env.VITE_RECAPTCHA_SITE_KEY || '',
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  NODE_ENV: import.meta.env.NODE_ENV || 'development'
};

// Validación de variables de entorno requeridas
export const validateEnv = () => {
  const requiredVars = ['VITE_RECAPTCHA_SITE_KEY', 'VITE_API_URL'];
  const missing = requiredVars.filter(varName => !import.meta.env[varName]);
  
  if (missing.length > 0) {
    console.error('❌ Variables de entorno faltantes:', missing);
    throw new Error(`Variables de entorno requeridas faltantes: ${missing.join(', ')}`);
  }
  
  console.log('✅ Variables de entorno validadas correctamente');
};