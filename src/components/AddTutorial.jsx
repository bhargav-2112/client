/* eslint-disable no-unused-vars */
import {useState} from 'react'
import { createTutorial } from '../actions/tutorials'
import { useDispatch } from 'react-redux';
const AddTutorial = () => {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const newTutorial = () => {}
  const saveTutorial = async() => {
    console.log("title", title);
    console.log("description", description);
    await dispatch(createTutorial(title, description));
  }

  const onChangeTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  }

  const onChangeDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  }

  return (
    <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={title}
                onChange={onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={description}
                onChange={onChangeDescription}
                name="description"
              />
            </div>

            <button onClick={saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
  )
}

export default AddTutorial