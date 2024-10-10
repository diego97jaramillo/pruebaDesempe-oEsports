import { ApiProperty } from "@nestjs/swagger"
import { Transform } from "class-transformer"
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"
import { Player } from "src/player/entities/player.entity"
import { Tournament } from "src/tournament/entities/tournament.entity"

export class CreateRankingDto {

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    score: number

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    tournament: Tournament

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    player: Player
}
