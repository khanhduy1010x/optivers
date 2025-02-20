import { IsNotEmpty } from "class-validator";
import { ErrorCode } from "src/common/exceptions/error-code.enum";
import { IsValidNickname } from "src/common/validations/validate-dekName.decorator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateFlashCardDto{
    @ApiProperty({ description: 'Deck name', example: 'My Flashcards' })
    @IsValidNickname(ErrorCode.INVALID_DECKNAME)
    deckName: string;
    @ApiProperty({ description: 'List of flashcards' })
    @IsNotEmpty({message: ""})
    cards:  { front: string; back: string }[];
}