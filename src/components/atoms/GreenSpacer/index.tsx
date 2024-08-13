import React from 'react';
import { GreenSpacerTag } from './styles';

interface Props {
  spacer: number;
}

const GreenSpacer: React.FC<Props> = ({ spacer }) => <GreenSpacerTag style={{ height: spacer }} />;

export default GreenSpacer;
