export type NormalizeStreetNameOutputCase = 'upper' | 'proper' | 'input';
export type StreetNamePart = 'name' | 'type' | 'suffix';
export interface NormalizeStreetNameOptions {
    outputCase?: NormalizeStreetNameOutputCase;
    classifyStreetNamePieceOverrides?: Record<string, StreetNamePart>;
    namePieceSubstitutions?: Record<string, string>;
}
export declare const DEFAULT_NAME_PIECE_SUBSTITUTIONS: Record<string, string>;
export declare const DEFAULT_OPTIONS: NormalizeStreetNameOptions;
