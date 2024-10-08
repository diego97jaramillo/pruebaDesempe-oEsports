import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator"
import { Tournament } from "src/tournament/entities/tournament.entity";

export class CreateResultDto {


    @IsUUID()
    @IsString()
    @IsNotEmpty()
    winner: string;

    @IsUUID()
    @IsString()
    @IsNotEmpty()
    loser: string;

    
    @IsNumber()
    @IsNotEmpty()
    winnerPoints: number;

    @IsNumber()
    @IsNotEmpty()
    loserPoints: number;

    @IsUUID()
    @IsNotEmpty()
    tournament: Tournament;
}
