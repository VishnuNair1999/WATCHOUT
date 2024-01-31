/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_APPWRITE_PROJECT_ID: string;
  }
  
  declare interface ImportMeta {
    env: ImportMetaEnv;
  }
  