export interface IRepository<T> {
    GetAll(): Promise<T[]>;
    GetById(id: number): Promise<T | null>;
    GetByIds(id: number[]): Promise<T[]>;
    Insert(object: T): void;
    Edit(id:number, updatedObject: T): void;
    Delete(id: number): void;
}