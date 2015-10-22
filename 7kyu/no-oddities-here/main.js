/**
 * This wasn't validated because it was strictly necessary to use function(),
 * otherwise it would return: "noOdds" is read-only.
 */
const noOdds = values => values.filter(n => !(n % 2));
