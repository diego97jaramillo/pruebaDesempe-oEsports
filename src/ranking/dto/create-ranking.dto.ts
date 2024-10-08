import { Transform } from "class-transformer"
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"
import { Player } from "src/player/entities/player.entity"
import { Tournament } from "src/tournament/entities/tournament.entity"

export class CreateRankingDto {

    @IsNumber()
    @IsOptional()
    score: number

    @IsNotEmpty()
    @IsString()
    tournament: Tournament

    @IsNotEmpty()
    @IsString()
    player: Player
}
