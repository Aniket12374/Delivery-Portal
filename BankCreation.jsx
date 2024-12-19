import { Radio } from "antd";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { MdOutlineFileUpload } from "react-icons/md";
import {
  createVendorBankDetails,
  getVendorBankDetails,
  updateVendorBankDetails,
} from "../../../services/Vendor/vendorService";
import { useParams } from "react-router-dom";
import { useVendorStore } from "../../../store/store";
import { bankDetailsFormat } from "../Data/FormatData";
import { bankDetailsInitialValues } from "../Data/InitialValues";
import UploadBtn from "../../Common/UploadBtn/UploadBtn";
import InputVendor from "../../Common/InputVendor/InputVendor";

function BankCreation({
  saveClicked,
  setStage,
  vendorId = null,
  stage = null,
}) {
  const [bankInfo, setBankInfo] = useState(bankDetailsInitialValues);
  const setStoreBankDetails = useVendorStore((state) => state.setBankDetails);
  const storeBankDetails = useVendorStore((state) => state.bank_details);

  const handleSetVal = (data) => {
    const formattedVal = bankDetailsFormat(data);
    setBankInfo(formattedVal);
    setStoreBankDetails(formattedVal);
  };

  useEffect(() => {
    getVendorBankDetails(vendorId)
      .then(({ data }) => {
        const bankData = data.find((x) => x.account_type);
        if (!bankData) return;

        handleSetVal(bankData);
        stage == 3 && setStage((prev) => prev + 1);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  useEffect(() => {
    if (!_.isEqual(storeBankDetails, bankInfo)) {
      const isEmptyStore = Object.keys(storeBankDetails).length == 0;
      // payload validation

      let api;
      const equlObjs = _.isEqual(bankInfo, bankDetailsInitialValues);
      if (equlObjs) return;

      api = isEmptyStore ? createVendorBankDetails : updateVendorBankDetails;

      const payload = {
        ...bankInfo,
        vendor: vendorId,
        ...(!isEmptyStore && {
          bank: bankInfo?.id,
        }),
      };
      api(payload)
        .then(({ data }) => {
          handleSetVal(data);
          isEmptyStore && setStage((prev) => prev + 1);
        })
        .catch((err) => {
          console.log({ err });
        });
    }
  }, [saveClicked]);

  const handleChangeInput = (e) => {
    setBankInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange = (link) => {
    setBankInfo((prev) => ({
      ...prev,
      cancelled_cheque: link,
    }));
  };

  return (
    <div id='bank_details'>
      <div className='mt-10'>Bank Details</div>
      <div className='w-96 mt-3 flex space-x-3 justify-between'>
        <Radio.Group
          onChange={handleChangeInput}
          name='account_type'
          value={bankInfo?.account_type || "savings"}
        >
          <Radio value={"savings"}>Savings Account</Radio>
          <Radio value={"current"}>Current Account</Radio>
        </Radio.Group>
      </div>
      <div className='w-96 space-y-5 my-5'>
        <InputVendor
          type='text'
          name='account_number'
          placeholder='Bank account number *'
          value={bankInfo?.account_number}
          onChange={handleChangeInput}
        />
        <InputVendor
          type='text'
          name='account_holder_name'
          placeholder='Account Holder’s Name *'
          value={bankInfo?.account_holder_name}
          onChange={handleChangeInput}
        />
        <div className='grid grid-cols-2 gap-2 remove w-96'>
          <InputVendor
            type='text'
            placeholder='IFSC Code *'
            name='ifsc_code'
            className='m-0'
            value={bankInfo?.ifsc_code}
            onChange={handleChangeInput}
          />
          <InputVendor
            type='text'
            name='branch_name'
            placeholder='Branch Name *'
            className='m-0'
            value={bankInfo?.branch_name}
            onChange={handleChangeInput}
          />
        </div>
      </div>
      <div className='w-96 mb-10 flex space-x-3'>
        <UploadBtn
          name='Upload Cancelled Cheque (JPG/PDF)'
          handleChange={handleChange}
          uploadedState={setBankInfo}
          uniQuekey={"cancelled_cheque"}
        />

        {bankInfo?.cancelled_cheque && (
          <img
            src={bankInfo?.cancelled_cheque}
            alt=''
            width={100}
            height={100}
          />
        )}
      </div>
    </div>
  );
}

export default BankCreation;
