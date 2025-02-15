import * as React from 'react';
import { Checkbox, CheckboxProps } from '../../index';

export const Checked = () => {
  const [checked, setChecked] = React.useState<CheckboxProps['checked']>(true);

  return <Checkbox checked={checked} onChange={(ev, data) => setChecked(data.checked)} label="Checked" />;
};

Checked.parameters = {
  docs: {
    description: {
      story: 'A checkbox can be initially checked using `defaultChecked`, or controlled via the `checked` property.',
    },
  },
};
