import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity('categories')
export class CategoryEntity extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(
    () => ProductEntity,
    (product: ProductEntity) => product.category,
    {
      onDelete: 'CASCADE',
    },
  )
  products: ProductEntity[];
}
