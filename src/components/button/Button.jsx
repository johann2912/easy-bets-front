import * as SC from './button.style';

export const Button = ({
  children,
  bgColor,
  fontSize,
  padding,
  type,
  onClick,
}) => {
  return (
    <SC.BtnWrap
      type={type}
      bgColor={bgColor}
      padding={padding}
      fontSize={fontSize}
      onClick={onClick}
    >
      {children}
    </SC.BtnWrap>
  );
};
