import { Expose, plainToClass } from 'class-transformer';

export abstract class BaseDto {
  @Expose()
  id: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt?: Date;

  static plainToObject<T extends BaseDto>(
    this: new (...args: any[]) => T,
    obj: T,
  ): T {
    return plainToClass(this, obj, {
      excludeExtraneousValues: true,
    });
  }
}
