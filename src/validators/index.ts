import ValidateConditions from './ValidateConditions';
import { ERROR_MESSAGES } from '../constants/messages';

interface ValidationInput {
  restaurantNames: string[];
  name: string;
}

export function validateRestaurantsName(value: ValidationInput) {
  const { restaurantNames, name } = value;
  if (ValidateConditions.isIncluded(restaurantNames, name))
    throw new Error(ERROR_MESSAGES.duplicateName);
}

export function validateRequiredValue(id: string, value: string) {
  if (ValidateConditions.isBlank(value)) {
    throw new Error(ERROR_MESSAGES.requireValue(id));
  }
}
