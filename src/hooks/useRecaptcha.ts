import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    grecaptcha: any;
    onRecaptchaLoad?: () => void;
  }
}

export const useRecaptcha = () => {
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const recaptchaInstance = useRef<number | null>(null);

  useEffect(() => {
    const loadRecaptcha = () => {
      // Verificar que grecaptcha esté disponible y tenga el método render
      if (window.grecaptcha && window.grecaptcha.render && recaptchaRef.current) {
        try {
          recaptchaInstance.current = window.grecaptcha.render(recaptchaRef.current, {
            sitekey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
            theme: 'light',
            size: 'normal'
          });
        console.log(window.grecaptcha);
        } catch (error) {
          console.error('Error rendering reCAPTCHA:', error);
        }
      } else if (window.grecaptcha && !window.grecaptcha.render) {
        console.error('reCAPTCHA loaded but render method not available. Check if using v3 instead of v2.');
      }
    };

    // Verificar si ya existe un script de reCAPTCHA
    const existingScript = document.querySelector('script[src*="recaptcha/api.js"]');
    
    if (window.grecaptcha && window.grecaptcha.render) {
      // reCAPTCHA ya está cargado y listo
      loadRecaptcha();
    } else if (!existingScript) {
      // Cargar el script de reCAPTCHA v2 explícito
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit';
      script.async = true;
      script.defer = true;
      
      // Función global para cuando se carga reCAPTCHA
      window.onRecaptchaLoad = () => {
        console.log('reCAPTCHA loaded successfully');
        loadRecaptcha();
      };
      
      script.onerror = () => {
        console.error('Failed to load reCAPTCHA script');
      };
      
      document.head.appendChild(script);
    } else {
      // El script ya existe, esperar a que se cargue
      const checkRecaptcha = setInterval(() => {
        if (window.grecaptcha && window.grecaptcha.render) {
          clearInterval(checkRecaptcha);
          loadRecaptcha();
        }
      }, 100);
      
      // Limpiar el intervalo después de 10 segundos
      setTimeout(() => clearInterval(checkRecaptcha), 10000);
    }

    return () => {
      if (recaptchaInstance.current !== null && window.grecaptcha) {
        window.grecaptcha.reset(recaptchaInstance.current);
      }
    };
  }, []);

  const getRecaptchaToken = (): string | null => {
    if (recaptchaInstance.current !== null && window.grecaptcha) {
      return window.grecaptcha.getResponse(recaptchaInstance.current);
    }
    return null;
  };

  const resetRecaptcha = () => {
    if (recaptchaInstance.current !== null && window.grecaptcha) {
      window.grecaptcha.reset(recaptchaInstance.current);
    }
  };

  return {
    recaptchaRef,
    getRecaptchaToken,
    resetRecaptcha
  };
};