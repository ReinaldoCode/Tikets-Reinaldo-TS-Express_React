import { Row } from '../types';
export const FormRow: React.FC<Row> = ({
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
        className='form-input'
        defaultValue={defaultValue || ''}
        required
      />
    </div>
  );
};
