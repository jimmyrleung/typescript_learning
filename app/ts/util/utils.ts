import { Printable } from "../models/index";

export function log(...items: Printable[]) {
    items.forEach((i) => i.log());
}