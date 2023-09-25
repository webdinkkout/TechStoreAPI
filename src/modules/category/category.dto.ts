import { Expose } from 'class-transformer';
import { BaseDto } from 'src/common/base.dto';

export class CategoryDto extends BaseDto {
  @Expose()
  name: string;
}
