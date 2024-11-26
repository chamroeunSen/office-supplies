import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import Button from 'react-bulma-companion/lib/Button';
import Column from 'react-bulma-companion/lib/Column';
import Columns from 'react-bulma-companion/lib/Columns';
import Input from 'react-bulma-companion/lib/Input';

import { attemptAddTodo } from '_store/thunks/todos';

import useKeyPress from '_hooks/useKeyPress';

export default function AddTodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTodo = () => {
    if (text) {
      dispatch(attemptAddTodo(text, description));
      setText('');
      setDescription('');
    }
  };

  useKeyPress('Enter', handleAddTodo);

  const updateText = e => setText(e.target.value);
  const updateDescription = e => setDescription(e.target.value);

  return (
    <Columns className="add-todo" gapless>
      <Column size="10">
        <Input value={text} onChange={updateText} />
        <Input value={description} onChange={updateDescription} />
      </Column>
      <Column size="2">
        <Button color="success" onClick={handleAddTodo} fullwidth>
          Add
        </Button>
      </Column>
    </Columns>
  );
}
