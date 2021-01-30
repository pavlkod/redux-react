import { Component } from "react";

import { connect } from "react-redux";
import { createPost } from "../../redux/actionCreators";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  submitHandler = e => {
    e.preventDefault();

    const { title } = this.state;

    if (title.trim()) {
      const data = {
        id: Date.now(),
        title,
      };
      console.log(data);

      this.setState({ ...this.state, title: "" });

      this.props.createPost(data);
    }
  };

  changeInputHandler = e => {
    const { value, name } = e.target;

    this.setState(prevState => ({
      ...prevState,
      ...{
        [name]: value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <button type="submit" className="btn btn-success mt-2">
          Создать
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
