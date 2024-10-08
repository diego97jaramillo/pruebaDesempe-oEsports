import { Ranking } from "src/ranking/entities/ranking.entity";
import { Result } from "src/result/entities/result.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tournaments")
export class Tournament {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column("text")
    name: string

    @Column("text")
    location: string

    @Column("text")
    endDate: Date

    @Column("text")
    startDate: Date

    @Column("text", {default: new Date().toISOString()})
    createdAt: Date;

    @DeleteDateColumn({select: false})
    deletedAt: Date

    @OneToMany(() => Ranking, ranking => ranking.tournament)
    rankings: Ranking[]

    @OneToMany(() => Result, result => result.tournament)
    results: Result[]
}
