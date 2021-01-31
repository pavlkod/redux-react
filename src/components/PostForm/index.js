import { Component } from "react";
import { connect } from "react-redux";

import { createPost, showError } from "../../redux/actionCreators";
import Alert from "../Alert";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  submitHandler = e => {
    e.preventDefault();

    const { title } = this.state;

    if (!title.trim()) {
      return this.props.showError("Введите название поста", 5000);
    }

    const data = {
      id: Date.now(),
      title,
    };

    this.setState({ ...this.state, title: "" });
    this.props.createPost(data);
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
        {this.props.error && <Alert message={this.props.error} />}
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

const mapStateToProps = state => ({
  error: state.app.error,
});

const mapDispatchToProps = {
  createPost,
  showError,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
