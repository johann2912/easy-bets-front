import * as SC from './button.style';

export const Button = ({
  children,
  bgColor,
  fontSize,
  width,
  padding,
  type,
  onClick,
  disabled,
}) => {
  return (
    <SC.BtnWrap
      type={type}
      bgColor={bgColor}
      width={width}
      padding={padding}
      fontSize={fontSize}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </SC.BtnWrap>
  );
};
