const title = "Hello world";
const styles = {
  backgroundColor: "blue",
  color: "red",
};

const todos = ["First todo", "Second todo", "Third todo"];

const showTitle = true;

const handleClick = (e) => {
  alert("Hello world");
  console.log(e);
};

function App() {
  return (
    <>
      {showTitle ? (
        <Title color="green">{title}</Title>
      ) : (
        <p>Welcome to my website</p>
      )}
      <input type="text" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

function Title({ color, hidden, children }) {
  return hidden ? null : <h1 style={{ color }}>{children}</h1>;
}

export default App;
