export type NormalizeStreetNameOutputCase = 'input' | 'proper' | 'upper';
export type StreetNamePart = 'name' | 'suffix' | 'type';
export interface NormalizeStreetNameOptions {
    classifyStreetNamePieceOverrides: Record<string, StreetNamePart>;
    namePieceSubstitutions: Record<string, string>;
    outputCase: NormalizeStreetNameOutputCase;
}
