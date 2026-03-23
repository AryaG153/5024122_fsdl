function Timer() {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);         // cleanup
  }, []); // run once

  return <div>Seconds passed: {seconds}</div>;
}