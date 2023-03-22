import {
  Entity,
  ManyToOne,
  JoinColumn,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderEntity } from 'src/order/order.entity';

@Entity()
export class CartEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  productId: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  total: number;

  @Column()
  userId: string;

  @Column({ default: false })
  assigned: boolean;

  @ManyToOne(() => OrderEntity, (order) => order.id, {
    cascade: true,
  })
  items: OrderEntity;
}