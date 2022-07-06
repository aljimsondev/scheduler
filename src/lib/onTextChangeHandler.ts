import {OnChangeTextHandlerType} from '../types';

/**
 * Changes object valued field
 * @param setState
 * @param initialValue
 * @param text
 * @param elementID
 */
export const OnChangeHandler: OnChangeTextHandlerType = (
  setState,
  initialValue,
  text,
  elementID,
) => {
  setState({...initialValue, [elementID]: text});
};
