import { useReducer } from 'react';

const initialState = {
  numString: '',
  resNums: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'calc':
      if (!action.payLoad) {
        const clear = [...state.numString.toString()];
        clear.pop();

        return {
          ...state,
          numString: clear.join(''),
        };
      }

      return {
        ...state,
        numString: `${state.numString}${action.payLoad}`,
      };
    case 'resNums':
      return {
        ...state,
        resNums: eval(state.numString),
        numString: eval(state.numString),
      };

    default:
      return state;
  }
};

export default function index({}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (val) => {
    dispatch({
      type: 'calc',
      payLoad: val,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'resNums' });
  };

  return (
    <section className="section has-background-link">
      <div className="container">
        <div className="is-flex is-justify-content-center is-align-items-center">
          <div className="has-background-dark p-5 py-2">
            <form className="mb-6" onSubmit={handleSubmit}>
              <input
                className="input is-success has-text-right mb-6"
                type="text"
                value={state.numString}
                onChange={handleInput}
              />
              <button className="button is-warning is-light column is-3" type="submit">
                =
              </button>
            </form>
            <div className="cal_btns buttons columns is-multiline">
              <button
                className="button is-warning is-light column is-3"
                onClick={() => handleInput(false)}>
                CE
              </button>
              <button
                className="button is-warning is-light column is-3"
                onClick={() => handleInput('+')}>
                +
              </button>
              <button
                className="button is-warning is-light column is-3"
                onClick={() => handleInput('-')}>
                -
              </button>
              <button
                className="button is-warning is-light column is-3"
                onClick={() => handleInput('*')}>
                *
              </button>
              <button
                className="button is-warning is-light column is-3"
                onClick={() => handleInput('/')}>
                ÷
              </button>
              <button
                className="button is-warning is-light column is-3"
                onClick={() => handleInput('%')}>
                %
              </button>
              <button
                className="button is-warning is-light column is-3"
                onClick={() => handleInput(9)}>
                9
              </button>
              <button
                className="button is-warning is-light column is-3"
                onClick={() => handleInput(8)}>
                8
              </button>
              <button
                className="button is-warning is-light column is-3"
                onClick={() => handleInput(7)}>
                7
              </button>
              <button
                className="button is-warning is-light column is-3"
                onClick={() => handleInput(6)}>
                6
              </button>
              <button
                className="button is-warning is-light column is-3"
                onClick={() => handleInput(5)}>
                5
              </button>
              <button
                className="button is-warning is-light column is-3"
                onClick={() => handleInput(4)}>
                4
              </button>
              <button
                className="button is-warning is-light column is-3"
                onClick={() => handleInput(3)}>
                3
              </button>
              <button
                className="button is-warning is-light column is-3"
                onClick={() => handleInput(2)}>
                2
              </button>
              <button
                className="button is-warning is-light column is-3"
                onClick={() => handleInput(1)}>
                1
              </button>
              <button
                className="button is-warning is-light column is-3"
                onClick={() => handleInput('0')}>
                0
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
