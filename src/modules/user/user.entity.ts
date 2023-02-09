import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn('varchar')
  email: string;

  @Column('varchar')
  password: string;

  @Column('varchar', { unique: true })
  user_name: string;

  @Column('varchar')
  phone_number: string;
}
