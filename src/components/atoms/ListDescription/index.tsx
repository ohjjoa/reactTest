import { ListDescriptionContainer } from './styles';

interface IListDescriptionProps {
  list: string[];
  theme: 'pink' | 'gray';
}

export const ListDescription = ({ list, theme }: IListDescriptionProps) => {
  return (
    <ListDescriptionContainer gray={theme === 'gray'} pink={theme === 'pink'}>
      {list.map((elem, index) => {
        return <li key={index}>{elem}</li>;
      })}
    </ListDescriptionContainer>
  );
};
