import _getAlternateStreetNameSpellings from './functions/getAlternateStreetNameSpellings.js';
import _normalizeStreetName from './functions/normalizeStreetName.js';
import { ssmClassifyStreetNamePieceOverrides, ssmStreetNameSubstitutions } from './substitutions/ssm.js';
import { streetNameSubstitutions } from './substitutions/streetNames.js';
export const DEFAULT_NORMALIZE_STREET_NAME_OPTIONS = Object.freeze({
    classifyStreetNamePieceOverrides: {},
    namePieceSubstitutions: streetNameSubstitutions,
    outputCase: 'upper'
});
export const SSM_NORMALIZE_STREET_NAME_OPTIONS = Object.freeze({
    ...DEFAULT_NORMALIZE_STREET_NAME_OPTIONS,
    classifyStreetNamePieceOverrides: ssmClassifyStreetNamePieceOverrides,
    namePieceSubstitutions: ssmStreetNameSubstitutions
});
/**
 * Normalizes a street name by classifying each piece of the street name as a 'name', 'suffix', or 'type',
 * applying substitutions, and setting the proper casing.
 * @param unnormalizedStreetName The street name to normalize.
 * @param userOptionsOrOutputCase User options or output case for normalization.
 * @returns The normalized street name.
 */
export default function normalizeStreetName(unnormalizedStreetName, userOptionsOrOutputCase = {}) {
    const options = {
        ...DEFAULT_NORMALIZE_STREET_NAME_OPTIONS,
        ...(typeof userOptionsOrOutputCase === 'string'
            ? { outputCase: userOptionsOrOutputCase }
            : userOptionsOrOutputCase)
    };
    return _normalizeStreetName(unnormalizedStreetName, options);
}
/**
 * Normalizes a Sault Ste. Marie, ON street name by classifying each piece of the street name as a 'name', 'suffix', or 'type',
 * applying substitutions, and setting the proper casing.
 * @param unnormalizedStreetName The street name to normalize.
 * @param outputCase The output case for the normalized street name.
 * @returns The normalized street name.
 */
export function normalizeSsmStreetName(unnormalizedStreetName, outputCase) {
    return normalizeStreetName(unnormalizedStreetName, outputCase === undefined
        ? SSM_NORMALIZE_STREET_NAME_OPTIONS
        : { ...SSM_NORMALIZE_STREET_NAME_OPTIONS, outputCase });
}
/**
 * Gets alternate spellings for a street name by generating all possible combinations of
 * the original and substituted pieces of the street name.
 * @param unnormalizedStreetName The street name to get alternate spellings for.
 * @param userOptionsOrOutputCase User options or output case for generating alternate spellings.
 * @returns An array of alternate spellings for the street name.
 */
export function getAlternateStreetNameSpellings(unnormalizedStreetName, userOptionsOrOutputCase = {}) {
    const options = {
        ...DEFAULT_NORMALIZE_STREET_NAME_OPTIONS,
        ...(typeof userOptionsOrOutputCase === 'string'
            ? { outputCase: userOptionsOrOutputCase }
            : userOptionsOrOutputCase)
    };
    return _getAlternateStreetNameSpellings(unnormalizedStreetName, options);
}
