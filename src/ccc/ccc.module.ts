import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnModuleDestroy,
  OnModuleInit,
  OnApplicationShutdown
} from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'
import { CccService } from './ccc.service'
import { CccController } from './ccc.controller'

@Module({
  controllers: [CccController],
  providers: [CccService]
})
export class CccModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    console.log('CccModule initialized')
  }
  onApplicationBootstrap() {
    console.log('CccModule bootstrapped')
  }
  onModuleDestroy() {
    console.log('CccModule destroyed')
  }
  beforeApplicationShutdown(signal: string) {
    console.log('CccModule beforeApplicationShutdown', signal)
  }
  onApplicationShutdown() {
    const cccService = this.moduleRef.get<CccService>(CccService)
    console.log('-------------------------------', cccService.findAll())
    console.log('CccModule onApplicationShutdown')
  }
}
