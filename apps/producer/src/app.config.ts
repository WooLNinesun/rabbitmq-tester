import { registerAs } from '@nestjs/config';

export const AppConfig = registerAs('app', () => ({
}));
