import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],  // Asegúrate de importar el módulo aquí
  // controllers: [],
  // providers: [],
})
export class AppModule {}