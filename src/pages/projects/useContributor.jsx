import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export const useContributor = ({ projectId }) => {
  const navigate = useNavigate();
  const [selectedContributor, setSelectedContributor] = useState(null);

  useEffect(() => {
    setSelectedContributor(null);
  }, [projectId]);

  const handleContributorChange = (selectedOption) => {
    setSelectedContributor(selectedOption);
    navigate(`/projects/${projectId}/${selectedOption.value}`);
  };

  return {
    selectedContributor,
    handleContributorChange,
  };
};
