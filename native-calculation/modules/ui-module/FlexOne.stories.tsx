import { storiesOf } from '@storybook/react-native'

import { FlexOne } from '@weirdo/ui-module/FlexOne'
import { GeneralText } from '@weirdo/ui-module/GeneralText'

storiesOf('FlexOne', module)
  .add('default', () => (
    <FlexOne>
      <GeneralText>text</GeneralText>
    </FlexOne>
  ))
  .add('fullSize', () => (
    <FlexOne fullSize>
      <GeneralText>text</GeneralText>
    </FlexOne>
  ))
