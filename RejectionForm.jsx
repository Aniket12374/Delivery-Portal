import React, { useState } from "react";
import { Select } from "antd";
import { rejectionReasons } from "../constants";
import toast from "react-hot-toast";
import { vendorRejection } from "../../../services/Vendor/vendorService";
import { useNavigate } from "react-router-dom";

const RejectionForm = ({ vendorId, onClose }) => {
  const [rejectionForm, setRejectionForm] = useState({
    reason: "",
    comments: "",
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log({ rejectionForm });

    vendorRejection(vendorId)
      .then((res) => {
        console.log("succesffuly rejected!");
        toast.success("Successfully Rejected!");
        onClose();
        navigate(0);
      })
      .catch((err) => {
        toast.error("Not successful");
      });
  };

  return (
    <div className='m-5 w-96'>
      <h1 className='font-semibold mr-8'>Rejection Reason</h1>
      <div>
        <Select
          size='large'
          options={rejectionReasons.map((x) => ({
            label: x,
            value: x,
          }))}
          placeholder={"Rejection Reason"}
          className='my-5 w-96'
          onChange={(val) =>
            setRejectionForm((prev) => ({
              ...prev,
              reason: val,
            }))
          }
        />
      </div>
      <input
        type='text'
        placeholder={"Add Comments"}
        value={rejectionForm?.comments}
        onChange={(e) =>
          setRejectionForm((prev) => ({
            ...prev,
            comments: e.target.value,
          }))
        }
      />
      <button className='create-ivt-btn mt-5' onClick={handleSubmit}>
        Reject
      </button>
    </div>
  );
};
export default RejectionForm;
