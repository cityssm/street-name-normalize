export interface NormalizeStreetNameOptions {
    outputCase?: 'upper' | 'lower' | 'proper' | 'input';
    namePieceSubstitutions?: Record<string, string>;
}
export declare const DEFAULT_NAME_PIECE_SUBSTITUTIONS: Record<string, string>;
export declare const DEFAULT_OPTIONS: NormalizeStreetNameOptions;
export declare function normalizeStreetName(unnormalizedStreetName: string, userOptions?: NormalizeStreetNameOptions): string;
export default normalizeStreetName;
