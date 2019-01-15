import { IPrintable } from "../interfaces/index";

export function log(...items: IPrintable[]) {
    items.forEach((i) => i.log());
}