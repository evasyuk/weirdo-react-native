import { storiesOf } from '@storybook/react-native'

import { GeneralText } from './GeneralText'

storiesOf('GeneralText', module)
  .add('example', () => <GeneralText>test</GeneralText>)
  .add('size 30', () => <GeneralText size={30}>test</GeneralText>)
