import { RowSelect } from '../types';
export const FormRowSelect: React.FC<RowSelect> = ({
  name,
  lableText,

  list,
  value,
  onChange,
}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {lableText || name}
      </label>
      <select
        name={name}
        id={name}
        className='form-select'
        value={value}
        onChange={onChange}
      >
        {list.map((itemValue: string) => {
          return (
            <option key={itemValue} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
