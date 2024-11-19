import { Form } from 'react-router-dom';
import Wrapper from '../wrappers/dashboard-form-page';
import { FormRow } from './form-row';
import { FormRowSelect } from './from-row-select';
import { ITEM_CONDITION_SERCH, ITEM_STATUS_SERCH } from '../utils/content';
import { useAllItemsContext } from '../pages';
import React, { useState } from 'react';

export const SearchContainer = () => {
  const { showFilter } = useAllItemsContext() as any;
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState(ITEM_STATUS_SERCH.All);
  const [condition, setCondition] = useState(ITEM_CONDITION_SERCH.All);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    showFilter({ search: e.target.value, status, condition });
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
    showFilter({ search, status: e.target.value, condition });
  };

  const handleConditionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCondition(e.target.value);
    showFilter({ search, status, condition: e.target.value });
  };
  return (
    <Wrapper>
      <Form className='form'>
        <div className='form-center'>
          <FormRow
            type='search'
            name='search'
            lableText='search'
            value={search}
            onChange={handleSearchChange}
          />
          <FormRowSelect
            name='status'
            lableText='status'
            list={Object.values(ITEM_STATUS_SERCH)}
            value={status}
            onChange={handleStatusChange}
          />
          <FormRowSelect
            name='condition'
            lableText='condition'
            list={Object.values(ITEM_CONDITION_SERCH)}
            value={condition}
            onChange={handleConditionChange}
          />
        </div>
      </Form>
    </Wrapper>
  );
};
