import React, { useState } from 'react';
import { ToggleContainer, Slider, ToggleOption } from './styles';

function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <ToggleContainer onClick={toggle}>
      <Slider isToggled={isToggled} />
      <ToggleOption active={!isToggled}>Option A</ToggleOption>
      <ToggleOption active={isToggled}>Option B</ToggleOption>
    </ToggleContainer>
  );
}

export default ToggleButton;
