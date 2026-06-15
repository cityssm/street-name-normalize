import type { NormalizeStreetNameOutputCase, StreetNamePart } from './types.js';
export declare function classifyStreetNamePiece(unnormalizedStreetNamePiece: string, previousStreetNamePart: '' | StreetNamePart): StreetNamePart;
export declare function normalizeStreetNamePiece(unnormalizedStreetNamePiece: string, streetNamePart: StreetNamePart): string;
export declare function applyCase(normalizedStreetNamePiece: string, outputCase: NormalizeStreetNameOutputCase): string;
