import { Ranking } from "src/ranking/entities/ranking.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("players")
export class Player {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    name: string;

    @Column("text")
    lastname: string;

    @Column("text")
    password: string;

    @Column("text")
    birthdate: Date;

    @OneToMany(() => Ranking, ranking => ranking.player)
    rankings: Ranking[]

    @Column("text", {default: new Date()})
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt: Date
}
