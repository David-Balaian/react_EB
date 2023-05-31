import React from 'react';
import ErrorBoundary from './ErrorBoundary/errorBoundary';
import './App.css';
import { useThrowAsyncError } from './helpers/hooks/hooks';

const BuggyCounter = () => {
  const [counter, setCounter] = React.useState(0)
  const throwAsyncError = useThrowAsyncError();


  const handleClick = () => {
    setCounter((counter) => { return counter + 1 });
  }

  // const handleClick = () => {
  //   if (counter >= 5) {
  //     throw new Error('I crashed inside handler!');
  //   }
  //   setCounter((counter) => { return counter + 1 });
  // }

  // const handleClick = () => {
  //   try {
  //     if(counter > 4){
  //       throw new Error('I crashed inside handler!');
  //     }
  //     setCounter((counter) => { return counter + 1});
  //   } catch (error) {
  //     setCounter(() => { throw error });
  //   }
  // }

  // const handleClick = () => {
  //   try {
  //     if (counter > 1) {
  //       throw new Error('I crashed inside handler!');
  //     }
  //     setCounter((counter) => { return counter + 1 });
  //   } catch (error) {
  //     throwAsyncError(error)
  //   }
  // }

  React.useEffect(() => {
    if (counter >= 5) {
      throw new Error('I crashed!');
    }
  }, [counter])

  return <h1 onClick={handleClick}>{counter}</h1>;
}





export default function App() {
  return (
    <div className="App">
      <p>
        <b>
          This is an example of error boundaries in React.
          <br /><br />
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
        </b>
      </p>
      <hr />
      <ErrorBoundary>
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <BuggyCounter />
        {/* <BuggyCounter /> */}
      </ErrorBoundary>
      {/* <hr />
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary> */}
    </div>
  );
}
