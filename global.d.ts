declare global {
  interface Window {
    gtag: (string, string, any) => void;
  }
}

// At least one export statement
export {};
