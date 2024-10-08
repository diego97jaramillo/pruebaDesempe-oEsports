import { Transform } from "class-transformer"
import { IsISO8601, IsNotEmpty, IsString } from "class-validator"
import { Ranking } from "src/ranking/entities/ranking.entity"

export class CreateTournamentDto {

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsISO8601()
    endDate: Date

    @IsNotEmpty()
    @IsISO8601()
    startDate: Date

    @IsNotEmpty()
    @IsString()
    @Transform(({value}) => {if(typeof value === "string") {
        return value.toLowerCase()
    }})
    location: string
}
