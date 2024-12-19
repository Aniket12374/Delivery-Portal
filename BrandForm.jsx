import React, { useEffect, useState } from "react";
import { Modal, Radio } from "antd";
import _ from "lodash";
import UploadBtn from "../../Common/UploadBtn/UploadBtn";
import { brandInitialFields } from "../Data/InitialValues";
import { useParams } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { brandDataFormat } from "../Data/FormatData";
import { useVendorStore } from "../../../store/store";
import {
  createVendorBrand,
  getVendorBrand,
  updateVendorBrand,
} from "../../../services/Vendor/vendorService";
import InputVendor from "../../Common/InputVendor/InputVendor";
import AddressMap from "./Address/AddressMap";

const BrandForm = ({
  setStage,
  saveClicked,
  brandId = null,
  closeModal = null,
  isReviewForm = false,
  setApproveBtn = null,
  vendorId = null,
}) => {
  const brandDesignClassName = "my-4 ml-2";
  const [brandForm, setBrandForm] = useState(brandInitialFields);
  const [modal, setModal] = useState({
    open: false,
    img: "",
  });

  // const [addressModalShow, setAddressModalShow] = useState(false);

  // const locationParams = useParams();
  // const vendorId = locationParams?.id;

  const setBrandInStore = useVendorStore((state) => state.setBrand);
  const storeBrandData = useVendorStore((state) => state.brand);

  const handleInputChange = (e) => {
    setBrandForm((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    getVendorBrand(vendorId)
      .then(({ data }) => {
        const brandData = data?.find((x) => x.name !== null);
        if (!brandData) return;

        const brandVal = brandId
          ? data.find((x) => x.id == brandId)
          : data.find((x) => x.id !== null);
        //review form n addbutton click return
        if (isReviewForm && !brandId) {
          setBrandForm(brandInitialFields);
          setBrandInStore({});
          return;
        }

        const brandFormattedVal = brandDataFormat(brandVal);
        setBrandForm(brandFormattedVal);
        setBrandInStore(brandFormattedVal);
        setApproveBtn(true);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, [brandId]);

  useEffect(() => {
    if (!_.isEqual(storeBrandData, brandForm)) {
      const isEmptyStore = Object.keys(storeBrandData).length == 0;
      // payload validation

      let api;
      const equalObjs = _.isEqual(brandForm, brandInitialFields);
      if (equalObjs) return;

      api = isEmptyStore ? createVendorBrand : updateVendorBrand;

      const payload = {
        ...brandForm,
        vendor: vendorId,
        brand: brandForm?.id,
      };

      api(payload)
        .then((res) => {
          setBrandInStore(payload);
          setApproveBtn(true);
        })
        .catch((err) => {});
    }
  }, [saveClicked]);

  const handleUpload = (link, key) => {
    setBrandForm((prev) => ({
      ...prev,
      [key]: link,
    }));
  };

  const ImgShowBtn = ({ id, val }) =>
    val && (
      <button
        id={id}
        onClick={() => {
          setModal({
            open: true,
            img: val,
          });
        }}
      >
        <FaEye />
      </button>
    );

  const handleBrand = () => {
    const api = !brandId ? createVendorBrand : updateVendorBrand;

    const payload = {
      ...brandForm,
      vendor: vendorId,
      brand: brandForm?.id,
    };

    api(payload)
      .then((res) => {
        closeModal();
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <div className='w-96 items-center  text-center' id='add_brand'>
      <h2 className='font-semibold my-6 mx-8'>Create/Edit New Brand</h2>
      <InputVendor
        type='text'
        name='name'
        placeholder={"Brand Name *"}
        value={brandForm?.name}
        onChange={handleInputChange}
        className={`${brandDesignClassName}`}
      />

      <div className='w-full text-center mb-2'>
        <InputVendor
          type='text'
          name='legal_name'
          placeholder={"Brand Legal Name *"}
          value={brandForm?.legal_name}
          onChange={handleInputChange}
          className={`${brandDesignClassName}`}
        />
      </div>
      <div className='flex justify-center space-x-3 mt-5'>
        <UploadBtn
          name='Upload Brand Logo *'
          uniQuekey='logo'
          handleChange={handleUpload}
          key='logo'
        />
        <ImgShowBtn id={"logo"} val={brandForm?.logo} />
      </div>
      <div className='w-full text-center'>
        <InputVendor
          type='text'
          name='brand_url'
          placeholder={"Web URL *"}
          value={brandForm?.brand_url}
          onChange={handleInputChange}
          className={`${brandDesignClassName}`}
        />
        <div className='w-full text-center'>
          <InputVendor
            type='text'
            name='mesky_margin'
            placeholder={"Mesky Margin *"}
            value={brandForm?.mesky_margin}
            onChange={handleInputChange}
            className={`${brandDesignClassName}`}
          />
        </div>
      </div>
      <div className='  border-2 border-gray-300  rounded-lg'>
        <div className='relative my-6 mr-8 mb-2'>
          <div className='font-semibold absolute  left-6 top-[-32px] bg-white whitespace-nowrap text-xs text-[#878787]'>
            I have *
          </div>

          <div className='text-left ml-2'>
            <Radio.Group
              onChange={handleInputChange}
              name='certificate_type'
              value={brandForm?.certificate_type}
            >
              <Radio value={"Brand Authorization Certificate"}>
                Brand Authorization Certificate
              </Radio>
              <Radio value={"TradeMark Certificate"}>TradeMark Number</Radio>
            </Radio.Group>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-5 space-x-3'>
        <UploadBtn
          name='Upload Brand Authorization Certificate(JPG/PDF)*'
          uniQuekey={"brand_authorization_certificate"}
          handleChange={handleUpload}
        />
        <ImgShowBtn
          id={"brand_authorization_certificate_img"}
          val={brandForm?.brand_authorization_certificate}
        />
      </div>

      <div className='w-full mr-3 text-center'>
        <InputVendor
          type='text'
          placeholder={"TradeMark Number *"}
          className={`${brandDesignClassName}`}
        />
      </div>
      <div className='flex justify-center space-x-3 mt-5'>
        <UploadBtn
          name='Upload TradeMark Certificate(JPG/PDF)'
          uniQuekey={"trademark_certificate"}
          handleChange={handleUpload}
          key='trademark_certificate'
        />
        <ImgShowBtn
          id={"trademark_certificate_img"}
          val={brandForm?.trademark_certificate}
        />
      </div>

      <div className='  my-2 p-1 rounded-sm bg-gray-300 border-lightgrey-800'></div>
      {/* <button
        className='my-2 mx-16 bg-red-400 rounded rounded-sm pl-6 pr-4 mr-4 text-white'
        onClick={() => setAddressModalShow(true)}
      >
        + Add Address
      </button> */}

      <div>
        {isReviewForm && (
          <button className='create-ivt-btn mx-auto' onClick={handleBrand}>
            {!brandId ? "Create Brand" : "Update Brand"}
          </button>
        )}
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

export default BrandForm;
