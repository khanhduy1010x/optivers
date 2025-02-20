import { HttpStatus } from '@nestjs/common';

export enum ErrorCode {
  INVALID_CODE,
  UNCATEGORIZED_CODE,
  INVALID_USERNAME,
  NULL_USERNAME,
  NULL_PASSWORD,
  INVALID_PASSWORD,
  UNAUTHENTICATED,
  UNAUTHORIZED,
  NOT_FOUND,
  SERVER_ERROR,
  INVALID_DECKNAME,
  MISSING_SECRET_KEY
}
export const ErrorDetails = {
  [ErrorCode.INVALID_CODE]: { code: 1000, message: 'Invalid code', httpStatus: HttpStatus.INTERNAL_SERVER_ERROR },
  [ErrorCode.UNCATEGORIZED_CODE]: { code: 9999, message: 'Uncategorized error', httpStatus: HttpStatus.INTERNAL_SERVER_ERROR },
  [ErrorCode.INVALID_USERNAME]: { code: 1001, message: 'Username must be between 6 - 25 characters', httpStatus: HttpStatus.BAD_REQUEST },
  [ErrorCode.NULL_USERNAME]: { code: 1002, message: 'Username must not be null', httpStatus: HttpStatus.BAD_REQUEST },
  [ErrorCode.NULL_PASSWORD]: { code: 1003, message: 'Password must not be null', httpStatus: HttpStatus.BAD_REQUEST },
  [ErrorCode.INVALID_PASSWORD]: { code: 1004, message: 'Password must have at least 8 characters with uppercase, lowercase, number, and special character', httpStatus: HttpStatus.BAD_REQUEST },
  [ErrorCode.UNAUTHENTICATED]: { code: 1005, message: 'Unauthenticated', httpStatus: HttpStatus.UNAUTHORIZED },
  [ErrorCode.UNAUTHORIZED]: { code: 1006, message: 'You do not have permission', httpStatus: HttpStatus.FORBIDDEN },
  [ErrorCode.NOT_FOUND]: { code: 1007, message: 'Resource not found', httpStatus: HttpStatus.NOT_FOUND },
  [ErrorCode.SERVER_ERROR]: { code: 1008, message: 'Internal server error', httpStatus: HttpStatus.INTERNAL_SERVER_ERROR },
  [ErrorCode.INVALID_DECKNAME]: { code: 1009, message: 'Invalid DeckName', httpStatus: HttpStatus.BAD_REQUEST },
  [ErrorCode.MISSING_SECRET_KEY]: { code: 1010, message: 'Missing JWT_SECRET in environment variables', httpStatus: HttpStatus.INTERNAL_SERVER_ERROR },

};
