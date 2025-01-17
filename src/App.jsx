import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import UploadPage from "./pages/UploadPage";
import ConnectPage from "./pages/ConnectPage";
import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="connect" element={<ConnectPage />} />
            <Route path="upload" element={<UploadPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
