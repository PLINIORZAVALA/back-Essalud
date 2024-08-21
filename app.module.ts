import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/modulos/user/user.module'//Faltaba vincular la direccion 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', 
      database: 'voluntario_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, 
    }),
    UserModule, // Importa el módulo en lugar de la entidad
  ],
})
export class AppModule {}
