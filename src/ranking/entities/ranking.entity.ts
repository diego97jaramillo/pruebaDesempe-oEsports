import { Player } from "src/player/entities/player.entity";
import { Tournament } from "src/tournament/entities/tournament.entity";
import { Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("rankings")
export class Ranking {
    @PrimaryGeneratedColumn('uuid')
    id: string

    score: number

    @ManyToOne(() => Tournament, tournament => tournament.rankings)
    tournament: Tournament

    @ManyToOne(() => Player, player => player.rankings)
    player: Player
}
