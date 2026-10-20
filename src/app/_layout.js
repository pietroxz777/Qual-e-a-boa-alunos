// ===============================================
// A "MOLDURA" que envolve todas as telas do app
// ===============================================

// CONCEITO: import
// "Import" traz para cá uma ferramenta que outra pessoa ja criou!!

// Stack: "pilha de telas". Quando o app tem várias telas, uma abre por cima da outra, como cartas empilhadas. Vem do pacote expo-router.
import { Stack } from "expo-router";

// StatusBar = a barra lá em cima do celular (relógio, bateria, sinal)
import { StatusBar } from "expo-status-bar";

// CONCEITO
// No React native, cada pedaço de tela é um componente.
// Um componente é só uma FUNÇÃO que devolve (return) o que aparece.

// essa função default é a função principal deste arquivo, é assim que o Expo Router encontra o layout
export default function Layout() {
  return (
    <>
        {/* StatusBar: style-"light" deixa o relogio e bateria brancos  */}
      <StatusBar style="light" />
      {/* Stack: a pilha de telas */}
      {/* ScreenOptions: opções que valem para todas telas */}
      {/* headerShown: esconde a abarra de título que o expo coloca no topo por padrão */}
      <Stack screenOptions={{ headerShown: false}} />
    </>
  );
}