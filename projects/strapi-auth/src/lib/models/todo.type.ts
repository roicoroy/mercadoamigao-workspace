import { ITodo } from './todo.interface';

export class Todo implements ITodo {
    id?: number;
    name?: string;
    complete?: boolean;


    constructor(todo: ITodo) {
        this.id = todo?.id;
        this.name = todo.name;
        this.complete = todo.complete;
    }
}
