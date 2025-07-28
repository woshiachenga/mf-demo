import { Button } from 'antd';
import React from 'react';

export default (props: { init?: number }) => {
  const [c, setC] = React.useState(props.init ?? 10);

  return (
    <div>
      <h1> remote Counter</h1>
      <div>
        <Button
          data-testid="remote-button"
          onClick={() => {
            setC((c) => c + 1);
          }}
        >
          click to add
        </Button>
      </div>
      <div>
        remote hooks counter
        <span data-testid="remote-counter">{c}</span>
      </div>
    </div>
  );
};
