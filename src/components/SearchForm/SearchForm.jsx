export default function SearchForm({ onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.currentTarget.elements.query.value);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" placeholder="Enter your request" />
      <button type="submit">Search</button>
    </form>
  );
}
