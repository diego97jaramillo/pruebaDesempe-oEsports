import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator"
import { Tournament } from "src/tournament/entities/tournament.entity";

export class CreateResultDto {


    @IsUUID()
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    winner: string;

    @IsUUID()
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    loser: string;


    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    winnerPoints: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    loserPoints: number;

    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    tournament: Tournament;
}

