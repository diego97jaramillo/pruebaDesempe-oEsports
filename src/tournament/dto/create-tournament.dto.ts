import { ApiProperty } from "@nestjs/swagger"
import { Transform } from "class-transformer"
import { IsISO8601, IsNotEmpty, IsString } from "class-validator"
import { Ranking } from "src/ranking/entities/ranking.entity"

export class CreateTournamentDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string

    @ApiProperty()
    @IsNotEmpty()
    @IsISO8601()
    endDate: Date

    @ApiProperty()
    @IsNotEmpty()
    @IsISO8601()
    startDate: Date

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Transform(({value}) => {if(typeof value === "string") {
        return value.toLowerCase()
    }})
    location: string
}
