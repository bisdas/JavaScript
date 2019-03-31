import { ITask } from './ITask';

export default interface IState {
    currentTask: string;
    tasks: Array<ITask>;
}