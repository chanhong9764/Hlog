declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
    DB_HOST: string;
    JWT_SECRET: string;
    JWT_ALGORITHM: string;
    API_PREFIX: string;
  }
}
