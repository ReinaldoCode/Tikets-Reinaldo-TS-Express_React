import { useNavigate } from 'react-router-dom';
import { Edit } from '../types';
import { FaEdit } from 'react-icons/fa';

export const EditComponent = ({ equipment_id }: Edit) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`../edit-item/${equipment_id}`);
  };

  return (
    <button className='btn delete-btn c-btn' onClick={handleEdit}>
      <FaEdit className='new-icon' />
    </button>
  );
};
