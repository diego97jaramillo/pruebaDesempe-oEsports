import { ApiProperty } from "@nestjs/swagger"
import { Transform } from "class-transformer"
import { IsDate, IsISO8601, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"

export class CreatePlayerDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Transform(({value}) => {if(typeof value === "string") {
        return value.toLowerCase()
    }})
    name: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Transform(({value}) => {if(typeof value === "string") {
        return value.toLowerCase()
    }})
    lastname: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string

    @ApiProperty()
    @IsNotEmpty()
    @IsISO8601()
    @Transform(({value}) => new Date(value).toISOString())
    birthdate: Date
}
