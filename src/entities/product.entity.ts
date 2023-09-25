import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CategoryEntity } from './category.entity';

@Entity('products')
export class ProductEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  detail: string;

  @Column()
  about: string;

  @Column()
  spec: string;

  @Column()
  price: number;

  @Column()
  priceSale: number;

  @Column()
  quantity: number;

  @Column()
  thumbnail: string;

  @Column()
  idImg: string;

  @Column()
  categoryId: number;

  @ManyToOne(
    () => CategoryEntity,
    (categoryEntity: CategoryEntity) => categoryEntity.products,
  )
  @JoinColumn()
  category: CategoryEntity;
}
