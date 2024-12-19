import VendorFlow from "./pages/VendorFlow";
import ReviewInventoryVendor from "./pages/ReviewInventoryVendor";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CreateInventoryVendor from "./pages/CreateInventoryVendor";
import ProductTabs from "./components/Inventory/CreationTabs/Product/ProductTabs";
import VendorAgreement from "./components/Inventory/CreationTabs/VendorAgreement";
import Listing from "./components/Requisition/RequistionCreation/Listing";
import CreateNew from "./components/Requisition/RequistionCreation/CreateNew";
import ReviewListing from "./components/Requisition/CategoryReview/ReviewListing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/inventory/review-vendors/edit/:id'
          element={<ReviewInventoryVendor />}
        />
        <Route
          path='/inventory/vendors/create/:id'
          element={<CreateInventoryVendor />}
        />

        <Route
          path='/inventory/vendors/:vendorId/products/:productId'
          element={<ProductTabs />}
        />

        <Route path='/' element={<VendorFlow />} />
        <Route path='/ag' element={<VendorAgreement />} />
        <Route path='/login' element={<Login />} />
        <Route path='/re' element={<Listing />} />
        <Route path='/rec' element={<CreateNew />} />
        <Route path='/cat-rev' element={<ReviewListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
