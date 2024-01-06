import { Route, Routes } from "react-router-dom";
import "./index.css";

import SignInForms from "./_auth/forms/SignInForms";
import { Home } from "./_root/pages";
import SignUpForms from "./_auth/forms/SignUpForms";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          {/* public routes */}
          <Route path="/sign-in" element={<SignInForms />} />
          <Route path="/sign-up" element={<SignUpForms />} />
        </Route>

        <Route element={<RootLayout />}>
          {/* private routes */}
          <Route index element={<Home />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
