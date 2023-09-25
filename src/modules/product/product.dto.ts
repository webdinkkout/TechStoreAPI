import { Expose } from 'class-transformer';
import { BaseDto } from 'src/common/base.dto';

export class ProductDto extends BaseDto {
  @Expose()
  name: string;

  @Expose()
  detail: string;

  @Expose()
  about: string;

  @Expose()
  spec: string;

  @Expose()
  price: number;

  @Expose()
  priceSale: number;

  @Expose()
  quantity: number;

  @Expose()
  thumbnail: string;

  @Expose()
  idImg: string;

  @Expose()
  categoryId: number;
}
