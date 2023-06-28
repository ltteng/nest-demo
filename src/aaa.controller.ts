import {
  Controller,
  Get,
  Req,
  Res,
  Next,
  HttpCode,
  Header,
  Redirect,
  Render
} from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Controller({ host: ':host.0.0.1', path: 'aaa' })
export class AaaController {
  @Get('bbb')
  hello() {
    return 'hello'
  }

  @Get('ccc')
  ccc(@Req() req: Request) {
    console.log('req.hostname:', req.hostname)
    console.log('req.url:', req.url)

    return 'ccc'
  }

  @Get('ddd')
  ddd(@Res({ passthrough: true }) res: Response) {
    console.log('res:', res)
    return 'ddd'
  }

  @Get('eee')
  eee(@Next() next: NextFunction) {
    console.log('handler1')
    next()
    return 'eee1'
  }
  @Get('eee')
  eee2() {
    console.log('handler2')
    return 'eee2'
  }

  @Get('fff')
  @HttpCode(222)
  fff() {
    return 'fff'
  }

  @Get('ggg')
  @Header('aaa', 'bbb')
  ggg() {
    return 'ggg'
  }

  @Get('hhh')
  @Redirect('https://bing.com')
  hhh() {
    console.log('redirect')
  }

  @Get('user')
  @Render('user')
  user() {
    return { name: 'yo', age: 18 }
  }
}
