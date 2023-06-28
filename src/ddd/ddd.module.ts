import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit
} from '@nestjs/common'
import { DddService } from './ddd.service'
import { DddController } from './ddd.controller'

@Module({
  controllers: [DddController],
  providers: [DddService]
})
export class DddModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log('DddModule initialized')
  }
  onApplicationBootstrap() {
    console.log('DddModule bootstrapped')
  }
  onModuleDestroy() {
    console.log('DddModule destroyed')
  }
  beforeApplicationShutdown(signal: string) {
    console.log('DddModule beforeApplicationShutdown', signal)
  }
  onApplicationShutdown() {
    console.log('DddModule onApplicationShutdown')
  }
}
