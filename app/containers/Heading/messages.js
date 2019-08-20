/*
 * Heading Messages
 *
 * This contains all the text for the Heading container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Heading';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Heading container!',
  },
});
