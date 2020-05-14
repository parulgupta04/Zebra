import { useState } from 'react';

function useForm() {
  const [form, setForm] = useState({});

  function updateForm(key, value) {
    const formCopy = { ...form, [key]: value };
    setForm(formCopy);
  }

  function fillForm(data) {
    setForm(data);
  }

  return { form, updateForm, fillForm };
}

export default useForm;
