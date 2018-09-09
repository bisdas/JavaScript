import * as React from 'react';

export class App extends React.Component<{}, IState>{
    constructor(props: {}) {
        super(props);

        this.state = {
            currentTask: '',
            tasks: []
        }
    }

    handleSubmit = (event: React.FormEvent) => {
        console.log('handleSubmit was called');
        event.preventDefault();

        this.setState({
            currentTask: '',
            tasks: [
                ...this.state.tasks,
                this.state.currentTask
            ]
        });
    }

    renderTasks = () => {
        return this.state.tasks.map((task: string, index: number) => {
            return (
                <div key={index}>{task}</div>
            )
        });
    }

    render() {
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
}

interface IState {
    currentTask: string,
    tasks: Array<string>
}