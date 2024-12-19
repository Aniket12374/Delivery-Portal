import React, { useState, useEffect } from "react";
import { DatePicker, Select, Checkbox, Radio, Modal } from "antd";
import _ from "lodash";
import { useParams } from "react-router-dom";
import {
  cityTypes,
  CompanyLegal,
  businessTypes,
  companyTypes,
  annualRevenue,
  legalInputs,
  DelieveryTypes,
} from "../constants";
import { LegalFinanceInitial } from "../Data/InitialValues";
import {
  createVendorLegalFinancial,
  getVendorLegalFinancial,
  updateVendorLegalFinancial,
} from "../../../services/Vendor/vendorService";
import { legalFinFormat } from "../Data/FormatData";

import { useVendorStore } from "../../../store/store";
import UploadBtn from "../../Common/UploadBtn/UploadBtn";
import InputVendor from "../../Common/InputVendor/InputVendor";
import { FaEye } from "react-icons/fa";
import toast from "react-hot-toast";
import dayjs from "dayjs";

const LegalFinancePage = ({
  saveClicked,
  setStage,
  vendorId = null,
  stage = null,
}) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [legalFinanceInfo, setLegalFinanceInfo] = useState(LegalFinanceInitial);
  const [modal, setModal] = useState({
    open: false,
    img: "",
  });

  const setStoreLF = useVendorStore((state) => state.setLegalFinance);
  const storeLF = useVendorStore((state) => state.legal_and_finance);

  const onChange = (value) => {
    console.log("selected = ", value);
    setSelectedValue(value);
  };

  const handleChangeInput = (e) => {
    setLegalFinanceInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    //fetch and set the data
    getVendorLegalFinancial(vendorId)
      .then(({ data }) => {
        const finLegalData = data?.find((x) => x.vendor !== null);
        if (!finLegalData) return;

        const dataObj = legalFinFormat(finLegalData);
        setLegalFinanceInfo(dataObj);
        setStoreLF(dataObj);
        stage === 4 && setStage((prev) => prev + 1);
      })
      .catch((err) => console.log({ err }));
  }, []);

  useEffect(() => {
    // checking with store data and updating accordingly
    if (!_.isEqual(storeLF, legalFinanceInfo)) {
      const isEmptyStore = Object.keys(storeLF).length == 0;
      // payload validation
      // problem emptying the store when we click on new

      let api;
      const equlObjs = _.isEqual(legalFinanceInfo, LegalFinanceInitial);
      if (equlObjs) return;

      api = isEmptyStore
        ? createVendorLegalFinancial
        : updateVendorLegalFinancial;

      const payload = {
        ...legalFinanceInfo,
        vendor: vendorId,
        legal_financial: legalFinanceInfo?.id,
      };

      api(payload)
        .then((res) => {
          const dataObj = res?.data?.find((x) => x?.id);
          const formattedData = legalFinFormat(dataObj);
          setLegalFinanceInfo(formattedData);
          setStoreLF(formattedData);
          setStage(5);
          toast.success("Legal and Finance updated successfully!");
        })
        .catch((err) => {
          toast.error("Legal and Finance not updated successfully!");
          console.log({ err });
        });
    }
  }, [saveClicked]);

  const handleUpload = (link, key) => {
    setLegalFinanceInfo((prev) => ({
      ...prev,
      [key]: link,
    }));
  };
  return (
    <div id='legal_finance' className='p-4'>
      <div className='flex space-x-8'>
        {/* Left Column */}
        <div className='flex flex-col w-1/3'>
          <div className='mb-4'>
            <DatePicker
              placeholder='Date of Incorporation *'
              format={"YYYY-MM-DD"}
              onChange={(dateString, date) => {
                console.log({ date, dateString });
                setLegalFinanceInfo((prev) => ({
                  ...prev,
                  date_of_incorporation: date,
                }));
              }}
              value={
                legalFinanceInfo?.date_of_incorporation
                  ? dayjs(legalFinanceInfo?.date_of_incorporation, "YYYY-MM-DD")
                  : undefined
              }
              // value={legalFinanceInfo?.date_of_incorporation}
              className='mr-2 w-full rounded-sm border-2 border-gray-200'
            />
          </div>

          {annualRevenue.map((rev) => (
            <div className='flex items-center' key={rev.name}>
              {/* <Select
                size='medium'
                options={[
                  { value: "1", label: "$" },
                  { value: "2", label: "₹" },
                ]}
                onChange={(value) => console.log({ value })}
              /> */}
              <InputVendor
                type='text'
                value={legalFinanceInfo?.annual_revenue[rev.name]}
                name={rev.name}
                onChange={(e) => {
                  setLegalFinanceInfo((prev) => ({
                    ...prev,
                    annual_revenue: {
                      ...legalFinanceInfo?.annual_revenue,
                      [rev.name]: e.target.value,
                    },
                  }));
                }}
                placeholder={rev.placeholder}
                className='text-sm w-full'
              />
            </div>
          ))}

          <div className='w-full border-2 my-2 mt-10 border-gray-300 rounded-lg'>
            <div className='relative my-8'>
              <h1 className='top-[-55px] absClassName'>Discount Offered</h1>
              <div className='mx-2' id='type_discount'>
                <div className='flex items-center'>
                  {/* <Select
                    size='medium'
                    options={[{ value: "2", label: "%" }]}
                    onChange={(value) => console.log({ value })}
                  /> */}
                  <InputVendor
                    type='text'
                    value={legalFinanceInfo?.discount_offered}
                    name={"discount_offered"}
                    onChange={handleChangeInput}
                    placeholder={"Mesky Margin"}
                    className='legal text-sm border-2 border-gray-200 rounded-sm'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className='mx-5 w-2/3'>
          <div className='border-2 border-gray-300 p-4 rounded-lg'>
            <div className='relative my-8'>
              <h1 className='top-[-71px] absClassName'>Legal Details</h1>
              <div className='flex flex-col text-sm'>
                {legalInputs.map((legalInput, index) => (
                  <div className='flex space-x-2 w-full my-2'>
                    <div>
                      <InputVendor
                        type='text'
                        name={legalInput.name}
                        value={legalFinanceInfo[legalInput.name]}
                        onChange={handleChangeInput}
                        placeholder={legalInput.placeholder}
                        className={`legal text-sm inline`}
                        key={legalInput.name}
                      />
                    </div>
                    {index !== 0 && (
                      <div className='flex space-x-3'>
                        <UploadBtn
                          name={legalInput?.uploadName}
                          className='w-32'
                          handleChange={handleUpload}
                          uniQuekey={legalInput.uploadState}
                        />

                        {legalFinanceInfo?.[legalInput?.uploadState] && (
                          <button
                            id={legalInput?.uploadState}
                            onClick={() => {
                              setModal({
                                open: true,
                                img: legalFinanceInfo?.[
                                  legalInput?.uploadState
                                ],
                              });
                            }}
                          >
                            <FaEye />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
                <h2 className='font-semibold mx-4 mt-2'>Business Category</h2>
                <div className={`flex space-x-4 items-center`}>
                  {CompanyLegal.map((type) => (
                    <Radio
                      key={type}
                      checked={legalFinanceInfo?.business_category === type}
                      className='m-2 custom-radio'
                      onChange={() =>
                        setLegalFinanceInfo((prev) => ({
                          ...prev,
                          business_category: type,
                        }))
                      }
                    >
                      {type}
                    </Radio>
                  ))}
                </div>
                <div className='flex space-x-3 '>
                  <div>
                    <InputVendor
                      type='text'
                      name='fssai_number'
                      value={legalFinanceInfo?.fssai_number}
                      onChange={handleChangeInput}
                      placeholder={"FSSAI Number*"}
                      className={`legal text-sm`}
                    />
                  </div>
                  <div className='flex space-x-3'>
                    <UploadBtn
                      name={"Upload FSSAI Certificate (JPG/PDF)"}
                      className='w-32'
                      handleChange={handleUpload}
                      uniQuekey={"fssai_certificate"}
                    />
                    {legalFinanceInfo?.fssai_certificate && (
                      <button
                        id={"fssai_certificate"}
                        onClick={() => {
                          setModal({
                            open: true,
                            img: legalFinanceInfo?.fssai_certificate,
                          });
                        }}
                      >
                        <FaEye />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex flex-row space-x-8 mt-8'>
        {/* Company Structure */}
        <div className='w-1/4 mx-2'>
          <div className='relative my-8'>
            <div className='top-[-21px] absClassName'>Company Structure *</div>
            <div className='border-2 border-gray-300 p-6 rounded-xl'>
              <div id='company_structure' className='my-2'>
                {companyTypes.map((type) => (
                  <div>
                    <Radio
                      key={type}
                      checked={legalFinanceInfo?.company_structure === type}
                      className='custom-radio'
                      onChange={() =>
                        setLegalFinanceInfo((prev) => ({
                          ...prev,
                          company_structure: type,
                        }))
                      }
                    >
                      {type}
                    </Radio>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='flex flex-col space-x-6'>
            <div className='mt-2'>
              <div className='relative my-8'>
                <div className='top-[-21px] absClassName'>
                  Type of Business *
                </div>
                <div className='border-2 border-gray-300 flex flex-col p-6 rounded-xl'>
                  {businessTypes.map((businessType) => (
                    <Checkbox
                      checked={
                        businessType === legalFinanceInfo?.type_of_business
                      }
                      key={businessType}
                      onChange={() =>
                        setLegalFinanceInfo((prev) => ({
                          ...prev,
                          type_of_business: businessType,
                        }))
                      }
                    >
                      {businessType}
                    </Checkbox>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Method and Terms of Service */}
        <div className='flex flex-col w-1/2 justify-center'>
          <div className='relative'>
            <div className='border-2 border-gray-300  p-4 rounded-xl'>
              <div className='top-[-21px] absClassName'>Delivery Method *</div>
              <div id='company_delivery'>
                {DelieveryTypes.map((type) => (
                  <div>
                    <Radio
                      key={type}
                      checked={legalFinanceInfo?.delivery_method === type}
                      className='custom-radio'
                      onChange={() =>
                        setLegalFinanceInfo((prev) => ({
                          ...prev,
                          delivery_method: type,
                        }))
                      }
                    >
                      {type}
                    </Radio>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='mt-2'>
            <div className='relative my-6'>
              <div className='top-[-21px] absClassName'>Terms of Service *</div>
              <div className='border-2 border-gray-300 mt-4 p-4 rounded-xl'>
                <InputVendor
                  type='text'
                  name={"turn_around_time"}
                  value={legalFinanceInfo?.turn_around_time}
                  onChange={handleChangeInput}
                  placeholder={"Turn Around Time *"}
                  className='legal text-sm mb-5'
                />
                <InputVendor
                  type='text'
                  name={"payment_duration"}
                  value={legalFinanceInfo?.payment_duration}
                  onChange={handleChangeInput}
                  placeholder={"Payment Duration Required *"}
                  className='legal text-sm mt-2'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Geographies Served */}
        <div className='w-1/4 mx-4'>
          <div className='relative my-8'>
            <div className='left-2 top-[-21px] absClassName'>
              Geographies Served *
            </div>
            <div className='border-2 border-gray-300 flex flex-col p-6 rounded-xl'>
              <div className='mr-4' id='type_geography'>
                {cityTypes.map((type) => (
                  <div>
                    <Checkbox
                      checked={type === legalFinanceInfo?.geographies_served}
                      key={type}
                      onChange={() =>
                        setLegalFinanceInfo((prev) => ({
                          ...prev,
                          geographies_served: type,
                        }))
                      }
                    >
                      {type}
                    </Checkbox>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={modal?.open}
        onCancel={() =>
          setModal({
            open: false,
            img: "",
          })
        }
      >
        <img src={modal?.img} alt='' width={100} height={100} />
      </Modal>
    </div>
  );
};
export default LegalFinancePage;
