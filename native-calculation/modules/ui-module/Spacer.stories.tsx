import { storiesOf } from '@storybook/react-native'

import { Spacer } from '@weirdo/ui-module/Spacer'
import { GeneralText } from '@weirdo/ui-module/GeneralText'
import { FlexOne } from '@weirdo/ui-module/FlexOne'

storiesOf('tool: Spacer', module)
  .add('dedicated view', () => (
    <FlexOne>
      <GeneralText>no spacing</GeneralText>
      <Spacer size={20} />
      <GeneralText>some text</GeneralText>
    </FlexOne>
  ))
  .add('wrapper view (acts like margin)', () => (
    <FlexOne fullSize>
      <GeneralText>no spacing</GeneralText>
      <Spacer size={20}>
        <GeneralText>spaced text / receives margin</GeneralText>
      </Spacer>
    </FlexOne>
  ))
