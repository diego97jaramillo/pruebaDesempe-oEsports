import { Transform } from "class-transformer"
import { IsDate, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"

export class CreatePlayerDto {

    @IsNotEmpty()
    @IsString()
    @Transform(({value}) => {if(typeof value === "string") {
        return value.toLowerCase()
    }})
    name: string

    @IsNotEmpty()
    @IsString()
    @Transform(({value}) => {if(typeof value === "string") {
        return value.toLowerCase()
    }})
    lastname: string

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string

    @IsNotEmpty()
    @Transform(({value}) => new Date(value))
    @IsDate()
    birthdate: Date
}
