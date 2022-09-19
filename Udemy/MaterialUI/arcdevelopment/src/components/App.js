import { ThemeProvider} from '@mui/material/styles';
import Header from "../components/ui/Header";
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      HELLO
    </ThemeProvider>
      
      
    
  );
}

export default App;

