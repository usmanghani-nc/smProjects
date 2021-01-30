import { useState } from 'react';
import { handleInputs } from 'utils/handleInputs';
import moment from 'moment';

export default function index() {
  const [text, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [err, setError] = useState(false);
  const [isUpdate, setIsupdate] = useState(false);

  // submit new todo
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('add ew');

    if (!text) return setError(true);

    const date = moment().format('MM-DD-YYYY');
    setTodos([...todos, { todo: text, date }]);

    setInput('');
  };

  const handleDelete = (idx) => {
    const arr = [...todos];
    if (isUpdate || isUpdate === 0) {
      setIsupdate(false);
      setInput('');
    }
    return setTodos(arr.filter((el) => el !== arr[idx]));
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const date = moment().format('MM-DD-YYYY');

    const updateArr = [...todos];
    updateArr.splice(isUpdate, 1, {
      todo: text,
      date,
    });

    setTodos(updateArr);
    setIsupdate(false);
    setInput('');
  };

  const handleUpdate = (idx) => {
    setIsupdate(idx);
    const arr = [...todos][idx];
    setInput(arr.todo);
  };

  return (
    <section className="section has-background-primary-dark">
      <div className="container">
        <div className={`modal ${err && 'is-active'}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title has-text-danger-dark">Please fill empty text filed</p>
              <button
                onClick={() => setError(false)}
                className="delete"
                aria-label="close"></button>
            </header>
          </div>
        </div>

        <div className="is-flex is-justify-content-center is-align-items-center">
          <div className="has-background-primary-light todo__container">
            <form
              className="is-flex mb-4"
              onSubmit={isUpdate || isUpdate === 0 ? handleSubmitUpdate : handleSubmit}>
              <input
                className="input is-success"
                type="text"
                placeholder="Add Todo"
                value={text}
                onChange={(e) => handleInputs(e.target.value, setInput)}
              />
              <button type="submit" className="button is-primary">
                {isUpdate || isUpdate === 0 ? 'Update todo' : 'Todo'}
              </button>
            </form>

            <div className="todo__container__todos">
              {todos.length ? (
                <ul>
                  {todos.map((t, i) => {
                    return (
                      <li
                        key={i}
                        className="is-flex is-justify-content-space-between has-background-primary-dark px-4 py-2 mb-4">
                        <div>
                          <h3 className="is-size-6 has-text-primary-light">{t.todo}</h3>
                          <p className="is-size-7 has-text-primary-light">{t.date}</p>
                        </div>
                        <div className="buttons">
                          <button onClick={() => handleUpdate(i)} className="button is-success">
                            Todo
                          </button>
                          <button onClick={() => handleDelete(i)} className="button is-danger">
                            x
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="is-flex is-justify-content-center mt-6">
                  <h3 className="has-text-primary-dark">No Todos</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
