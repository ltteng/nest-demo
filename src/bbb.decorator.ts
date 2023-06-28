import { applyDecorators, Get, UseGuards } from '@nestjs/common'
import { Aaa } from './aaa.decorator'
import { AaaGuard } from './aaa.guard'

export const Bbb = (path: string | string[], role: string) => {
  return applyDecorators(Get(path), Aaa(role), UseGuards(AaaGuard))
}
