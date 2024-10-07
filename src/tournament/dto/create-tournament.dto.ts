import { IsNotEmpty, IsString } from "class-validator"
import { Ranking } from "src/ranking/entities/ranking.entity"

export class CreateTournamentDto {

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    location: string
}
