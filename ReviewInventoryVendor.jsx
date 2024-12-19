import React, { useState } from "react";
import { Tabs } from "antd";
import { vendorEditTabs } from "../components/Inventory/constants";
import ProfileCreation from "../components/Inventory/CreationTabs/ProfileCreation";
import AddressView from "../components/Inventory/Listing/AddressView";
import Layout from "../components/Layout/Layout";
import Inventory2 from "../components/Inventory/Listing/VendorCreationList";
import ContactPage from "../components/Inventory/Listing/ContactPage";
import BankCreation from "../components/Inventory/CreationTabs/BankCreation";
import LegalFinancePage from "../components/Inventory/CreationTabs/LegalFinancePage";
import BrandPage from "../components/Inventory/Listing/BrandPage";

import { useParams } from "react-router-dom";
import ProductPage from "../components/Inventory/Listing/ProductPage";
import { vendorReviewApproval } from "../services/Vendor/vendorService";

function ReviewInventoryVendor() {
  const [saveClicked, setSaveClicked] = useState(false);
  const params = useParams();
  const vendorId = params?.id;

  const tabsProps = {
    saveClicked,
    setStage: null,
    vendorId,
  };
  const renderTabs = [
    <ProfileCreation {...tabsProps} />,
    <AddressView {...tabsProps} />,
    <ContactPage {...tabsProps} />,
    <BankCreation {...tabsProps} />,
    <LegalFinancePage {...tabsProps} />,
    <BrandPage {...tabsProps} />,
    <ProductPage {...tabsProps} />,
  ];

  const handleSaveNext = () => {
    setSaveClicked((prev) => !prev);
  };

  const handleApproval = () => {
    vendorReviewApproval(vendorId)
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <Layout>
      <div className='inventory-creation ml-10'>
        <div className='mt-5'>Add New Vendor</div>
        <div className='flex justify-end space-x-2 text-sm mr-5'>
          <button onClick={handleSaveNext} className='create-ivt-btn'>
            Save & Next
          </button>
          {vendorId !== "new" && (
            <button className='create-ivt-btn' onClick={handleApproval}>
              Approve
            </button>
          )}
        </div>
        <Tabs
          defaultActiveKey='1'
          className='roboto'
          items={vendorEditTabs.map((tab, index) => ({
            key: index,
            label: <div className='text-gray-400 tab-label'>{tab}</div>,
            children: renderTabs[index],
          }))}
        />
      </div>
    </Layout>
  );
}

export default ReviewInventoryVendor;
