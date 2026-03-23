function ContactForm() {
  const [form, setForm] = React.useState({ name: "", email: "" });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Name: ${form.name}, Email: ${form.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name"/>
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email"/>
      <button type="submit">Submit</button>
    </form>
  );
}