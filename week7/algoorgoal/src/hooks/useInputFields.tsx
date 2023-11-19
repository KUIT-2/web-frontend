import { useState } from 'react';

export default function useInputFields() {
  const [inputFields, setInputFields] = useState({ name: '', price: '' });

  const editInputFields = (name: string, value: string) => {
    setInputFields((currentInputFields) => ({
      ...currentInputFields,
      [name]: value,
    }));
  };

  return { inputFields, editInputFields };
}
