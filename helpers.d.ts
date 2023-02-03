export declare type StreetNamePart = 'name' | 'type' | 'suffix';
export declare function classifyStreetNamePiece(unnormalizedStreetNamePiece: string, previousStreetNamePart: StreetNamePart | ''): StreetNamePart;
export declare function normalizeStreetNamePiece(unnormalizedStreetNamePiece: string, streetNamePart: StreetNamePart): string;
