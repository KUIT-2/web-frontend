import { useState } from 'react';

export default function useIsEditing() {
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => {
    setIsEditing((currentIsEditing) => !currentIsEditing);
  };

  return { isEditing, toggleIsEditing };
}
