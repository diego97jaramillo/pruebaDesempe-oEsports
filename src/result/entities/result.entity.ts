import { Tournament } from "src/tournament/entities/tournament.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('results')
export class Result {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column("text")
    winner: string;

    @Column("text")
    loser: string;

    @Column("integer")
    winnerPoints: number;

    @Column("integer")
    loserPoints: number;

    @ManyToOne(() => Tournament, tournament => tournament.results)
    tournament: Tournament;
}
