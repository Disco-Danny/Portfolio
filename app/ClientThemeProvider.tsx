// components/ClientThemeProvider.tsx
'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes'; // Adjust path if needed

const ClientThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent server-side rendering

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default ClientThemeProvider;
