import React from 'react';
import IDogsProps from '../../interfaces/IDogsProps';
import {
  useQuery
} from 'react-query'
import getDogs from './api-calls';
import { Container } from './styles';

const Dogs = () => {

  const intervalMs = 5000;

  const { data, isLoading, error } = useQuery<IDogsProps, Error>('dogs', getDogs, {
    refetchInterval: intervalMs
  });

  return (
    <Container>
      {isLoading && <p>Loading...</p>}
      <img src={data?.message} alt="" />
    </Container>
  )
};

export default Dogs;