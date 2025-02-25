import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";
import { Kovriki } from "./pages/kovriki";
import { DlyaVannoy } from "./pages/dlya-vannoy";
import { Dorojki } from "./pages/dorojki";
import { Kovri } from "./pages/kovri";
import { Podderjki } from "./pages/podderjki";
import { Contact } from "./pages/contact";
import { ProductDetail } from "./components/product-detail";


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="Коврики" element={<Kovriki/>} />
          <Route path="Дляванной" element={<DlyaVannoy />} />
          <Route path="Дорожки" element={<Dorojki />} />
          <Route path="Особенныековры" element={<Kovri />}/>
          <Route path="Центрподдержки" element={<Podderjki />} />
          <Route path="Контакты" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
