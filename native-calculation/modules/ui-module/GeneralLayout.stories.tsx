import { storiesOf } from '@storybook/react-native'

import { GeneralLayout } from '@weirdo/ui-module/GeneralLayout'
import { GeneralText } from './GeneralText'

storiesOf('GeneralLayout', module)
  .add('default', () => (
    <GeneralLayout>
      <GeneralText>text</GeneralText>
    </GeneralLayout>
  ))
  .add('noTop', () => (
    <GeneralLayout noTop>
      <GeneralText>text</GeneralText>
    </GeneralLayout>
  ))
  .add('noScroll', () => (
    <GeneralLayout noScrollView>
      <GeneralText>text</GeneralText>
    </GeneralLayout>
  ))
  .add('centered', () => (
    <GeneralLayout centered>
      <GeneralText>text</GeneralText>
    </GeneralLayout>
  ))
