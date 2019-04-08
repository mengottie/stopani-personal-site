import React from 'react';
import { storiesOf } from '@storybook/react';

import Demo from './Demo';

storiesOf('Demo', module)
  .add('simple demo', () => <Demo />);
