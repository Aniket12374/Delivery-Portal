import { httpVendor } from "../../api/apiClient";

export const loginVendor = () => {
  return httpVendor.post("/login/", {
    username: "amul05",
    password: "mesky123",
  });
};

export const getVendorPendingList = () => {
  return httpVendor.get(`/vendor`);
};

export const getVendorProfileData = (vendorId) => {
  return httpVendor.get(`/vendor/?vendor=${vendorId}`);
};

// vendor poc crud

export const getVendorPOC = (vendorId) => {
  return httpVendor.get(`vendorpoc/?vendor=${vendorId}`);
};

export const createVendorPOC = (payload) => {
  return httpVendor.post(`vendorpoc/`, payload);
};

export const updateVendorPOC = (payload) => {
  return httpVendor.put(`vendorpoc/`, payload);
};

//create, update vendor

export const createVendor = (payload) => {
  return httpVendor.post("/vendor/", payload);
};

export const updateVendor = (payload) => {
  return httpVendor.put("/vendor/", payload);
};

//bank details crud

export const getVendorBankDetails = (vendorId) => {
  return httpVendor.get(`/bank-details/?vendor=${vendorId}`);
};

export const createVendorBankDetails = (payload) => {
  return httpVendor.post(`/bank-details/`, payload);
};

export const updateVendorBankDetails = (payload) => {
  return httpVendor.put(`/bank-details/`, payload);
};

//vendor address crud

export const getVendorAddress = (vendorId) => {
  return httpVendor.get(`/vendor-address/?vendor=${vendorId}`);
};

export const createVendorAddress = (payload) => {
  return httpVendor.post(`/vendor-address/`, payload);
};

export const updateVendorAddress = (payload) => {
  return httpVendor.put(`/vendor-address/`, payload);
};

export const deleteVendorAddress = (payload) => {
  console.log({ payload });
  return httpVendor.delete(`/vendor-address/`, { data: payload });
};

//vendor brand crud

export const getVendorBrand = (vendorId) => {
  return httpVendor.get(`/brand?vendor=${vendorId}`);
};
export const createVendorBrand = (payload) => {
  return httpVendor.post(`/brand/`, payload);
};
export const updateVendorBrand = (payload) => {
  return httpVendor.put(`/brand/`, payload);
};

//vendor legal n finance crud

export const createVendorLegalFinancial = (payload) => {
  return httpVendor.post("/legal-and-financial/", payload);
};

export const updateVendorLegalFinancial = (payload) => {
  return httpVendor.put("/legal-and-financial/", payload);
};

export const getVendorLegalFinancial = (vendorId) => {
  return httpVendor.get(`/legal-and-financial/?vendor=${vendorId}`);
};

//document upload

export const getDocumentUpload = (payload) => {
  return httpVendor.post(`/document-upload/`, payload);
};

export const getPinDetails = (pincode) => {
  return httpVendor.get(`pincode-info/?pincode=${pincode}`);
};

//review approval

export const vendorReviewApproval = (vendorId) => {
  return httpVendor.put("/vendor/", {
    vendor: vendorId,
    status: "APPROVED",
  });
};

export const vendorCreationApproval = (vendorId) => {
  return httpVendor.put("/vendor/", {
    vendor: vendorId,
    status: "UNDER_APPROVAL",
  });
};

export const vendorRejection = (vendorId) => {
  return httpVendor.put("/vendor/", {
    vendor: vendorId,
    status: "REJECTED",
  });
};

//product

export const getVendorProducts = (vendorId) => {
  return httpVendor.get(`/product-list?page=1&page_size=10&vendor=${vendorId}`);
};

export const getVendorProduct = (vendorId, productId) => {
  return httpVendor.get(
    `/product-detail/?product_id=${productId}&vendor=${vendorId}`
  );
};
export const createVendorProduct = (payload) => {
  return httpVendor.post("/product/", payload);
};
export const updateVendorProduct = (payload) => {
  return httpVendor.put("/product/", payload);
};

export const uploadProduct = (payload) => {
  return httpVendor.post("/product-upload/", payload);
};

//brand address

export const getVendorBrandAddress = (vendorId) => {
  return httpVendor.get(`/brandaddress/?vendor=${vendorId}`);
};

export const createVendorBrandAddress = (payload) => {
  return httpVendor.post(`/brandaddress/`, payload);
};

export const updateVendorBrandAddress = (payload) => {
  return httpVendor.put(`/brandaddress/`, payload);
};

export const deleteVendorBrandAddress = (payload) => {
  console.log({ payload });
  return httpVendor.delete(`/brandaddress/`, { data: payload });
};
