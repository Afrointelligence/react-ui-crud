export type AccessorFunc<T> = (item: T) => string | JSX.Element;

export type Accessor<T> = string | AccessorFunc<T>;
