export type 与<a1 extends boolean, a2 extends boolean> = a1 extends true ? (a2 extends true ? true : false) : false
