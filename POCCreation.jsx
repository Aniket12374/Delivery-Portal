import React, { useEffect, useState } from "react";
import _ from "lodash";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useVendorStore } from "../../../store/store";
import { useParams } from "react-router-dom";
import {
  createVendorPOC,
  getVendorPOC,
  updateVendorPOC,
} from "../../../services/Vendor/vendorService";
import { pocInitialValues } from "../Data/InitialValues";
import { pocFormat } from "../Data/FormatData";
import InputVendor from "../../Common/InputVendor/InputVendor";

const POCCreationForm = ({
  saveClicked = null,
  setStage,
  newContact = null,
  closeModal = null,
  isReviewForm = false,
  vendorId = null,
  stage = null,
}) => {
  const [pocInfo, setPocInfo] = useState(pocInitialValues);

  const setContactInStore = useVendorStore((state) => state.setContact);
  const storeContact = useVendorStore((state) => state.contact);
  // const location = useParams();
  // const vendorId = location.id;

  const handleChange = (e) => {
    setPocInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateContact = () => {
    const payload = {
      ...pocInfo,
      vendor: vendorId,
    };

    const api = !newContact
      ? createVendorPOC(payload)
      : updateVendorPOC(payload);
    api
      .then((res) => {
        closeModal();
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  useEffect(() => {
    getVendorPOC(vendorId)
      .then(({ data }) => {
        if (data.length == 0) {
          return;
        }
        const pocValue = newContact
          ? data.find((x) => x.id == newContact)
          : data.find((x) => x.id !== null);
        //review form n addbutton click return
        if (isReviewForm && !newContact) {
          setPocInfo(pocInitialValues);
          setContactInStore({});
          return;
        }
        const formattedPocData = pocFormat(pocValue);
        setPocInfo(formattedPocData);
        setContactInStore(formattedPocData);
        stage == 2 && setStage((prev) => prev + 1);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, [newContact]);

  useEffect(() => {
    if (!_.isEqual(storeContact, pocInfo)) {
      const isEmptyStore = Object.keys(storeContact).length == 0;
      let api;
      const equlObjs = _.isEqual(pocInfo, pocInitialValues);
      if (equlObjs) return;

      api = isEmptyStore ? createVendorPOC : updateVendorPOC;

      const payload = {
        ...pocInfo,
        vendor: vendorId,
      };

      api(payload)
        .then((res) => {
          setContactInStore(pocInfo);
          setPocInfo(pocFormat(res?.data));
          isEmptyStore && setStage((prev) => prev + 1);
        })
        .catch((err) => {
          console.log({ err });
        });
    }
  }, [saveClicked]);

  return (
    <div className='w-96' id='contact_details'>
      <div className='font-semibold mb-5'>Create New POC</div>
      <div className='space-y-5'>
        <InputVendor
          type='text'
          placeholder={"Full Name"}
          onChange={handleChange}
          value={pocInfo?.full_name}
          name='full_name'
        />
        <InputVendor
          type='text'
          placeholder={"Designation"}
          onChange={handleChange}
          value={pocInfo?.designation}
          name='designation'
        />
        <InputVendor
          type='text'
          placeholder={"Department"}
          onChange={handleChange}
          value={pocInfo?.department}
          name='department'
        />
        <InputVendor
          type='text'
          placeholder={"Email ID"}
          onChange={handleChange}
          value={pocInfo?.email}
          name='email'
        />
      </div>
      <PhoneInput
        country={"in"}
        value={pocInfo?.mobile_number}
        placeholder='Primary Contact Number'
        className='mt-5'
        onChange={(mobile_number) =>
          setPocInfo((prev) => ({ ...prev, mobile_number }))
        }
      />
      <PhoneInput
        country={"in"}
        value={pocInfo?.mobile_number_alternate}
        placeholder='Alternative Contact Number'
        className='my-5 w-full'
        onChange={(mobile_number_alternate) =>
          setPocInfo((prev) => ({ ...prev, mobile_number_alternate }))
        }
      />

      <label className='ml-3'>
        <input
          type='checkbox'
          className='font-bold mx-2'
          name='is_point_of_contact'
          onChange={() =>
            setPocInfo((prev) => ({
              ...prev,
              is_point_of_contact: !prev.is_point_of_contact,
            }))
          }
          checked={pocInfo?.is_point_of_contact}
        />
        is Point of Contact
      </label>
      <div>
        {isReviewForm && (
          <button
            className='create-ivt-btn mx-auto'
            onClick={handleCreateContact}
          >
            {!newContact ? "Create" : "Update"}
          </button>
        )}
      </div>
    </div>
  );
};

export default POCCreationForm;
