import { DividerStyle } from './styles';

interface IDividerProps {
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  borderBottom?: string;
}
export const Divider = (props: IDividerProps) => {
  return (
    <>
      <DividerStyle style={props} />
    </>
  );
};
