import * as React from 'react';

import * as IState from './IState';
import { ITask } from './ITask';

export class App extends React.Component<{}, IState.default>{
    constructor(props: {}) {
        super(props);

        this.state = {
            currentTask: '',
            tasks: []
        }
    }

    public handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        this.setState({
            currentTask: '',
            tasks: [
                ...this.state.tasks,
                {
                    id: this._getTimeInMilliseconds(),
                    value: this.state.currentTask,
                    completed: false
                }
            ]
        });
    }

    public deleteTask = (id: number): void => {
        const filteredTasks: Array<ITask> = this.state.tasks.filter((task: ITask) => task.id !== id);
        this.setState({ tasks: filteredTasks });
    }

    public renderTasks = (): JSX.Element[] => {
        return this.state.tasks.map((task: ITask, index: number) => {
            return (
                <div key={task.id}>
                    <span>{task.value}</span>
                    <button onClick={() => this.deleteTask(task.id)}>Delete</button>
                </div>
            )
        });
    }

    public render(): JSX.Element {
        console.log(this.state);
        return (
            <div>
                <h1>React TypeScript Todo List</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                        type="text"
                        placeholder="Add a task"
                        value={this.state.currentTask}
                        onChange={(e) => this.setState({ currentTask: e.target.value })}>
                    </input>
                    <button type="submit">Add Task</button>
                </form>
                <section>{this.renderTasks()}</section>
            </div>
        );
    }

    private _getTimeInMilliseconds = (): number => {
        const date = new Date();
        return date.getTime();
    }
}