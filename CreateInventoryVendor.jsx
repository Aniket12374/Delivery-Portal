import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import VerticalBar from "../components/Inventory/CreationTabs/VerticalBar";
import ProfileCreation from "../components/Inventory/CreationTabs/ProfileCreation";
import AddressMap from "../components/Inventory/CreationTabs/Address/AddressMap";
import POCCreation from "../components/Inventory/CreationTabs/POCCreation";
import BankCreation from "../components/Inventory/CreationTabs/BankCreation";
import LegalFinancePage from "../components/Inventory/CreationTabs/LegalFinancePage";
import BrandForm from "../components/Inventory/CreationTabs/BrandForm";
import { creationIdTabs } from "../components/Inventory/constants";
import { useVendorStore } from "../store/store";
import { vendorCreationApproval } from "../services/Vendor/vendorService";

function CreateInventoryVendor() {
  const [stage, setStage] = useState(0);
  const [saveClicked, setSaveClicked] = useState(false);
  const [approveBtn, setApproveBtn] = useState(false);
  const navigate = useNavigate();
  const locationParams = useParams();
  const resetStore = useVendorStore((state) => state.resetStore);

  const propsToTabs = {
    saveClicked,
    setStage,
    vendorId: locationParams?.id,
    stage,
  };

  const renderTabs = [
    <ProfileCreation {...propsToTabs} />,
    <AddressMap {...propsToTabs} />,
    <POCCreation {...propsToTabs} />,
    <BankCreation {...propsToTabs} />,
    <LegalFinancePage {...propsToTabs} />,
    <BrandForm {...propsToTabs} setApproveBtn={setApproveBtn} />,
  ];

  useEffect(() => {
    // empty the data in the store for newly created ones
    resetStore();
  }, []);

  const handleSaveNext = () => {
    setSaveClicked((prev) => !prev);
    // console.log("handle save getting called ");
    toast.error("data is successfully send");
  };

  const handleApprove = () => {
    console.log("handle approve btn clicked ");
    vendorCreationApproval(locationParams?.id)
      .then((res) => {
        navigate("/");
        console.log("Succesfully created");
      })
      .catch((err) => {
        console.error({ err });
      });
  };

  const scrollIn = () => {
    const childId = `#${creationIdTabs[2]}`;
    $(`#parentId`).animate(
      {
        scrollTop: $(`${childId}`).offset().top - $(`#parentId`).offset().top,
      },
      1000
    );
  };

  useEffect(() => {
    if (stage < creationIdTabs.length) {
      console.log(creationIdTabs[stage]);
      var elem = document.getElementById(creationIdTabs[stage]);
      elem.scrollIntoView();
    }
  }, [stage]);

  const handleSaveDraft = () => {
    setSaveClicked((prev) => !prev);
  };

  const handleCancel = () => {
    return navigate("/");
  };

  return (
    <Layout>
      <div className="inventory-creation ml-10" id="vendor-create">
        <div className="mt-5">Add New Vendor</div>
        <div className="flex justify-end space-x-2 text-sm mr-5">
          <button
            onClick={!approveBtn ? handleSaveNext : handleApprove}
            className="create-ivt-btn"
          >
            {!approveBtn ? "Save & Next" : "Send For Approval"}
          </button>
          <button className="create-ivt-btn" onClick={handleSaveDraft}>
            Save Draft
          </button>
          <button className="text-[#FB8171] font-bold" onClick={handleCancel}>
            Cancel
          </button>
        </div>
        <div className="flex space-x-3 overflow-hidden" id="parentId">
          <VerticalBar checkedStage={stage} />
          <div
            className="overflow-y-auto ml-5"
            style={{
              height: "calc(100vh - 200px)",
              width: "calc(100% - 300px)",
            }}
          >
            {renderTabs.slice(0, stage + 1)}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreateInventoryVendor;
