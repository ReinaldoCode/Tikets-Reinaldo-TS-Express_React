import { Row } from '../types';
export const FormRow: React.FC<Row> = ({
  type,
  name,
  lableText,
  value,
  onChange,
}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {lableText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className='form-input'
        required
      />
    </div>
  );
};
export const FormRowEdit: React.FC<Row> = ({
  type,
  name,
  lableText,
  defaultValue,
}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {lableText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue}
        className='form-input'
        required
      />
    </div>
  );
};
