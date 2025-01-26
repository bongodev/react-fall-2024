import React from 'react';
import { useParams } from 'react-router';

export const BongoDevProjectPage = () => {
  const { projectId } = useParams();

  return <div>{projectId}</div>;
};
