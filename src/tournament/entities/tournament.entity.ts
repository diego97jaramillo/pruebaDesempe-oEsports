import { Ranking } from "src/ranking/entities/ranking.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tournaments")
export class Tournament {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column("text")
    name: string

    @Column("text")
    location: string

    @OneToMany(() => Ranking, ranking => ranking.tournament)
    rankings: Ranking[]
}
