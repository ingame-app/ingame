import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Quest, QuestHiddenType, SideContent } from '@/models/quest.model';
import { modiMainQuest } from '@/api/quests.api';

interface EditMainQuestQuestProps extends Quest {
  title: string;
  difficulty: number;
  side: SideContent[];
  startDate: string;
  endDate: string;
  hidden: QuestHiddenType;
}

export const useEditQuest = () => {
  const [isPrivate, setIsPrivate] = useState(false);
  const [isDifficulty, setIsDifficulty] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const today = new Date().toISOString().substring(0, 10);
  const navigate = useNavigate();

  const { register, control, handleSubmit } = useForm<EditMainQuestQuestProps>();

  const onSubmit = handleSubmit((data) => {
    const hidden = (isPrivate ? 'TRUE' : 'FALSE') as QuestHiddenType;
    const status = data.side.map(side => side.status ? 'COMPLETED' : 'ON_PROGRESS');
    const newData = {...data, hidden, difficulty: isDifficulty, side: data.side.map((side, index) => ({...side, status: status[index]}))};
    EditQuestMutation.mutate(newData);
  });

  const EditQuestMutation = useMutation({
    mutationFn: modiMainQuest,
    onSuccess(res) {
      // navigate('/');
    },
    onError(err) {
      navigate('/error');
    },
  });

  return {
    isPrivate,
    setIsPrivate,
    isDifficulty,
    setIsDifficulty,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    today,
    register,
    control,
    handleSubmit,
    onSubmit,
    EditQuestMutation
  };
};