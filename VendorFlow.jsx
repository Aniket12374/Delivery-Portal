import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { allTabs } from "../components/Inventory/constants";
import VendorApprovedList from "../components/Inventory/Listing/VendorApprovedList";
import Layout from "../components/Layout/Layout";
import VendorCreationList from "../components/Inventory/Listing/VendorCreationList";
import VendorOnboardedList from "../components/Inventory/Listing/VendorOnboardedList";
import { getVendorPendingList } from "../services/Vendor/vendorService";
import { useNavigate } from "react-router-dom";
import VendorAgreement from "../components/Inventory/CreationTabs/VendorAgreement";

function VendorFlow() {
  const navigate = useNavigate();
  const [tabData, setTabData] = useState({
    pending: [],
    approvalPending: [],
    onBoarded: [],
  });

  useEffect(() => {
    getVendorPendingList()
      .then((res) => {
        const data = res?.data;

        const allData = data.map((x) => ({
          v_code: x?.id,
          vendor: x?.company_name,
          onboarded_by: x?.created_by_name,
          email: x?.company_email,
          mobile_number: x?.company_mobile_number,
          status: x?.status,
          key: x?.id,
        }));
        const onBoarded = allData.filter((data) => data.status == "APPROVED");
        const pending = allData.filter(
          (data) => data.status == "DRAFT" || data.status == "REJECTED"
        );
        // const approvalPending = allData.filter(
        //   (data) => data.status == "APPROVED"
        // );
        const approvalPending = allData.filter(
          (data) => data.status == "UNDER_APPROVAL"
        );
        setTabData({
          pending,
          approvalPending,
          onBoarded,
        });
      })
      .catch((err) => {
        if (err?.status === 401) {
          // return navigate("/login");
        }
        console.log({ err });
      });
  }, []);

  const renderTabs = [
    <VendorCreationList data={tabData?.pending} />,
    <VendorApprovedList data={tabData?.approvalPending} />,
    <VendorOnboardedList data={tabData?.onBoarded} />,
    <VendorAgreement />,
  ];
  // const openGmailWithPrefilled = () => {
  //   const to = "amittal@mesky.com"; // Pre-filled "To" email
  //   const subject = "Subject"; // Pre-filled subject
  //   const body = "Body"; // Pre-filled email body
  //   const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(
  //     subject
  //   )}&body=${encodeURIComponent(body)}`;
  //   window.open(gmailUrl, "_blank");
  // };
  return (
    <Layout>
      {/* <button onClick={openGmailWithPrefilled}>
        Open Gmail with Prefilled Email
      </button> */}
      <Tabs
        defaultActiveKey="1"
        className="roboto"
        items={allTabs.map((tab, index) => ({
          key: index,
          label: <div className="text-gray-400 tab-label">{tab}</div>,
          children: renderTabs[index],
        }))}
      />
    </Layout>
  );
}

export default VendorFlow;
