import { Provider as PaperProvider } from 'react-native-paper'
import { CalculationView } from '@weirdo/calculation-module/CalculationView'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export const App = () => (
  <PaperProvider>
    <SafeAreaProvider>
      <CalculationView />
    </SafeAreaProvider>
  </PaperProvider>
)

export default App;
