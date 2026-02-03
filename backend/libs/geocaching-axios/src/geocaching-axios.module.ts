import { Module } from '@nestjs/common';
import { UsersModule } from '@app/users';
import { GeocachingAxiosInterceptor } from './geocaching-axios.interceptor'

@Module({
  imports: [UsersModule],
  providers: [GeocachingAxiosInterceptor],
  exports: [GeocachingAxiosInterceptor],
})
export class GeocachingAxiosModule {}
