function ClickList() {
  const handleClick = (event, item) => {
    console.log("Clicked:", item, "event type:", event.type);
  };

  return (
    <ul>
      {["A", "B", "C"].map(item => (
        <li key={item} onClick={e => handleClick(e, item)} style={{ cursor: "pointer" }}>
          Click {item}
        </li>
      ))}
    </ul>
  );
}