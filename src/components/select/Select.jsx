import { forwardRef } from 'react';
import ReactSelect from 'react-select';
import * as SC from './select.style';

const Select = forwardRef((props, ref) => {
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      zIndex: 99999,
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 99999,
    }),
    container: () => ({
      width: '100%',
      marginTop: 0,
    }),
    control: (base, state) => ({
      ...base,
      // height: "39px",
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
      borderTopLeftRadius: '0px',
      borderBottomLeftRadius: '0px',
      backgroundColor: state.isDisabled
        ? '#E3E3E3'
        : props.bg
        ? 'f0f0f0'
        : 'white',
      borderColor: 'transparent',
      boxShadow: state.isFocused ? 'trasnparent' : 'trasnparent',

      '&:hover': {
        borderColor: 'transparent',
        boxShadow: state.isFocused ? 'trasnparent' : 'trasnparent',
      },
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: 'none',
    }),
    singleValue: (base) => ({
      ...base,
      color: 'white',
    }),
  };

  return (
    <SC.ContainerValue err={props.err} className={props.className}>
      <ReactSelect
        ref={ref}
        placeholder={props.placeholder ? props.placeholder : 'Seleccione...'}
        styles={customStyles}
        options={props.options}
        menuPortalTarget={props.documentBody ? document.body : null}
        isDisabled={props.disabled}
        {...props}
      />
    </SC.ContainerValue>
  );
});

export default Select;
