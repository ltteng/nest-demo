import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UploadedFiles,
  UseInterceptors
} from '@nestjs/common'
import { AnyFilesInterceptor } from '@nestjs/platform-express'
import { PersonService } from './person.service'
import { CreatePersonDto } from './dto/create-person.dto'
import { UpdatePersonDto } from './dto/update-person.dto'

@Controller('api/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get('find')
  query(@Query('name') name: string, @Query('age') age: number) {
    return `received: name=${name},age=${age}`
  }

  @Get(':id')
  urlParam(@Param('id') id: string) {
    return `received: id=${id}`
  }

  @Post('formUrlEncoded')
  formUrlEncoded(@Body() createPersonDto: CreatePersonDto) {
    return `received: ${JSON.stringify(createPersonDto)}`
  }

  @Post('formJson')
  formJson(@Body() createPersonDto: CreatePersonDto) {
    return `received: ${JSON.stringify(createPersonDto)}`
  }

  @Post('formData')
  @UseInterceptors(
    AnyFilesInterceptor({
      dest: 'uploads/'
    })
  )
  formData(
    @Body() createPersonDto: CreatePersonDto,
    @UploadedFiles() files: Array<Express.Multer.File>
  ) {
    console.log('files :', files)
    return `received: ${JSON.stringify(createPersonDto)}`
  }
}
