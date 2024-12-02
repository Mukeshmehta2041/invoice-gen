import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./features/home"
import { AboutPage } from "./features/about"
import { FeaturesPage } from "./features/features"
import { CreateInvoicePage } from "./features/create-invoice"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/create-invoice" element={<CreateInvoicePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App