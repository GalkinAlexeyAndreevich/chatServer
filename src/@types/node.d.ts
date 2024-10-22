declare namespace NodeJS {
  interface ProcessEnv {
    JWT_SECRET: string;
    REFRESH_TOKEN_SECRET: string;
    POSTGRES_HOST:string;
    POSTGRES_USER:string
    POSTGRES_DB:string
    POSTGRES_PASSWORD:string
    POSTGRES_PORT:string
    // добавьте другие переменные окружения по необходимости
  }
}