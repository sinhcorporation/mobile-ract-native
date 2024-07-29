import { GluestackUIStyledProvider, Button, ButtonText, GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Button>
        <ButtonText>Hello World</ButtonText>
      </Button>
    </GluestackUIProvider>
  )
}