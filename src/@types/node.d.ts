declare namespace NodeJS {
  interface ProcessEnv {
    JWT_SECRET: string;
    REFRESH_TOKEN_SECRET: string;
    DB_NAME:string;
    DB_USER:string;
    DB_PASSWORD:string;
    // добавьте другие переменные окружения по необходимости
  }
}