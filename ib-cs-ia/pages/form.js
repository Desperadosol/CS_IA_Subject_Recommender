import { useState } from 'react';
import Layout from '@/components/layout';

function Form() {
  const [form, setForm] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission of the form
    // For example, you can create a .json file and send it to the database
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="question1" value={form.question1} onChange={handleChange} placeholder="-?" />
      <input name="question2" value={form.question2} onChange={handleChange} placeholder="-?" />
      <input name="question3" value={form.question3} onChange={handleChange} placeholder="-?" />
      <input name="question4" value={form.question4} onChange={handleChange} placeholder="-?" />
      <input name="question5" value={form.question5} onChange={handleChange} placeholder="-?" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default function FormPage() {
    return (
        <Layout>
            <Form />
        </Layout>
    );
}