import { useFormContext } from 'react-hook-form';

export const crearRadioButton = (name, id, label) => {
  const { register } = useFormContext();
  
  return (
    <label className="card__form-input-container" key={id}>
      <input
        type="radio"
        id={id}
        value={id}
        {...register(name)}
        className="card__form-input"
      />
      {label}
    </label>
  );
};