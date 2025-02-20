import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FlashcardDeck, FlashcardDeckDocument } from "../schemas/flashcard-deck.schema";
import {Model} from 'mongoose'
import { CreateFlashCardDto } from "../dto/create-flashcard.dto";

@Injectable()
export class FlashCardService {
    constructor(@InjectModel(FlashcardDeck.name) private readonly flashCardModel: Model<FlashcardDeckDocument>) {}

    async createFlashCard(flashCardDTO: Partial<CreateFlashCardDto>): Promise<FlashcardDeck> { 
        return this.flashCardModel.create(flashCardDTO);
    }
}