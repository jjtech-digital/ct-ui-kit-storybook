import React from 'react';
import RichTextInput from '@commercetools-uikit/rich-text-input';
import { IntlProvider } from "react-intl";

const html = '<p>hello world</p>';
export const RichText = (props) => {
  const [value, setValue] = React.useState(html);
  const handleChange = React.useCallback((event) => {
    setValue(event.target.value);
  }, []);
  const ref = React.useRef(null);
  const handleReset = React.useCallback(() => {
    ref.current?.resetValue('');
  }, []);
  return (
    <IntlProvider locale="en">
      <button onClick={handleReset}>Reset</button>
      <RichTextInput value={value} onChange={handleChange} ref={ref} />
    </IntlProvider>
  );
};
