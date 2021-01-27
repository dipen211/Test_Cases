import React, { Component } from 'react';
class Table extends Component {
    state = {
        items: [] as any,
        item: '',
    };
    onChange = (e: any) => {
        this.setState({
            item: e.target.value,
        });
    };
    addItem = (e: any) => {
        e.preventDefault();
        this.setState({
            items: this.state.items.concat(
                this.state.item
            ),
            item: '',
        });
    };
    render() {
        const submitDisabled = !this.state.item;
        return (
            <>
                <form onSubmit={this.addItem}>
                    <div>
                        <input
                            className='prompt'
                            type='text'
                            placeholder='Add item...'
                            value={this.state.item}
                            onChange={this.onChange}
                        />
                    </div>
                    <button
                        type='submit'
                        disabled={submitDisabled}
                    >
                        Add item
                    </button>
                </form>
                <table style={{ margin: "auto" }}>
                    <thead>
                        <tr>
                            <th>Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.items.map((item: any, id: any) => (
                                <tr
                                    key={id}
                                >
                                    <td>{item}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </>
        )
    }
}
export default Table;