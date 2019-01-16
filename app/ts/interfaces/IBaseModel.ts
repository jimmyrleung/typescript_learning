import { IPrintable } from './IPrintable';
import { IEquals } from './IEquals';

// We can't extends multiple classes but we can extend mutiple interfaces
export interface IBaseModel<T> extends IPrintable, IEquals<T> {

}