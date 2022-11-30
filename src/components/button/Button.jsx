import * as SC from './button.style';

export const Button = ({
  children,
  bgColor,
  fontSize,
  width,
  padding,
  type,
  onClick,
}) => {
  return (
    <SC.BtnWrap
      type={type}
      bgColor={bgColor}
      width={width}
      padding={padding}
      fontSize={fontSize}
      onClick={onClick}
    >
      {children}
    </SC.BtnWrap>
  );
};
