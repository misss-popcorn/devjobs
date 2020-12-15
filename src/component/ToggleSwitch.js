import styled from "styled-components";

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  vertical-align: bottom;
  margin-left: 4px;
`;

const Span = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 24px;

  &:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 5px;
    bottom: 5px;
    background-color: var(--violet);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  &:before {
    border-radius: 50%;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Span} {
    background-color: white;
  }

  &:focus + ${Span} {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + ${Span}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

export const ToggleSwitch = ({ toggle }) => {
  return (
    <Label>
      <Input type="checkbox" defaultChecked={false} onChange={toggle} />
      <Span />
    </Label>
  );
};
