function FocusInput() {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} placeholder="autofocus input" />;
}