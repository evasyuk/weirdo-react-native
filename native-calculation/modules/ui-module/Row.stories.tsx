import { storiesOf } from '@storybook/react-native'

import { GeneralText } from '@weirdo/ui-module/GeneralText'
import { Spacer } from '@weirdo/ui-module/Spacer'
import { Row } from '@weirdo/ui-module/Row'
import { FlexOne } from '@weirdo/ui-module/FlexOne'

storiesOf('tool: Row', module)
  .add('no row', () => (
    <FlexOne>
      <GeneralText>no spacing</GeneralText>
      <Spacer size={20} />
      <GeneralText>spaced text / receives margin</GeneralText>
    </FlexOne>
  ))
  .add('row', () => (
    <FlexOne>
      <Row>
        <GeneralText>no spacing</GeneralText>
        <Spacer size={20} />
        <GeneralText>spaced text / receives margin</GeneralText>
      </Row>
    </FlexOne>
  ))
