import React from 'react';
import ReactDOM from 'react-dom';
import API from './api';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        API.getPost()
            .then(data => this.setState({posts: data}));
    }

    removePost = id => () => {
        API.removePost(id)
            .then(isSuccess => {
                if (isSuccess) {
                    const {posts} = this.state,
                        removeElementIndex = posts.findIndex(p => p.id === id);

                    posts.splice(removeElementIndex, 1);

                    this.setState({posts});
                }
            })
    }

    handleSubmit = e => {
        e.preventDefault();

        console.log(this.textareaHTML.value);
        console.log(this.inputHTML.value);
    }

    renderForm() {
        return (
            <div>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <h2>ADD POST</h2>
                    <p>
                        <label>
                            Header:
                            <input
                                ref={instance => this.inputHTML = instance}
                                type="text"/>
                        </label>
                    </p>
                    <p>
                        <label>
                            Body
                            <textarea
                                ref={instance => this.textareaHTML = instance}
                                cols='30'
                                rows='5'></textarea>
                        </label>
                    </p>
                    <button type='submit'>
                        ADD POST
                    </button>
                </form>
                <hr/>
            </div>
        );
    }

    renderPosts() {
        const {posts} = this.state;

        if (posts.length > 0) {
            return (
                <ul>
                    {posts.map(post =>
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <button onClick={this.removePost(post.id)}>
                                remove post
                            </button>
                        </li>)}
                </ul>
            );
        }

        return <div>Loading...</div>;
    }

    render() {
        return (
            <div>
                {this.renderForm()}
                <h1>POSTS</h1>
                {this.renderPosts()}
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);













// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'Hello',
//         body: 'World',
//         userId: 1123123
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// }).then(r => r.json()).then(r => console.log(r));

// fetch('https://jsonplaceholder.typicode.com/posts/?userId=1123123');
