import {byRecipe, baseElements} from './recipes.js';
export function combine(element1, element2) {
    var recipe = [element1, element2].sort().join(',');
    return byRecipe[recipe];
}
export function getBaseElements() {
    return baseElements;
}