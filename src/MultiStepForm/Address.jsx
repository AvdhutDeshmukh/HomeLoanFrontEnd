import React, { useState } from "react";

function Address({ registration, setRegistration, nextStep, prevStep }) {
  const [error, setError] = useState("");

  const handleNext = () => {
    const addr = registration.customerAddress || {};
    const perm = addr.permanentAddress || {};
    const local = addr.localAddress || {};

    // Validation: all fields must be filled
    if (
      !perm.houseNumber || !perm.streetName || !perm.areaname || !perm.cityname || !perm.district || !perm.state || !perm.pincode ||
      !local.houseNumber || !local.streetName || !local.areaname || !local.cityname || !local.district || !local.state || !local.pincode
    ) {
      setError("All permanent and current address fields are required!");
      return;
    }

    setError("");
    nextStep();
  };

  const updateAddress = (type, key, value) => {
    setRegistration({
      ...registration,
      customerAddress: {
        ...registration.customerAddress,
        [type]: {
          ...registration.customerAddress?.[type],
          [key]: value,
        },
      },
    });
  };

  const addr = registration.customerAddress || {};
  const perm = addr.permanentAddress || {};
  const local = addr.localAddress || {};

  return (
    <div className="card p-4">
      <h5>Step 4: Address Details</h5>
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Permanent Address */}
      <h6 className="mt-3">Permanent Address</h6>
      <input
        className="form-control mb-2"
        placeholder="House Number"
        value={perm.houseNumber || ""}
        onChange={(e) =>
          updateAddress("permanentAddress", "houseNumber", e.target.value)
        }
      />
      <input
        className="form-control mb-2"
        placeholder="StreetName"
        value={perm.streetName || ""}
        onChange={(e) =>
          updateAddress("permanentAddress", "streetName", e.target.value)
        }
      />
      <input
        className="form-control mb-2"
        placeholder="AreaName"
        value={perm.areaname || ""}
        onChange={(e) =>
          updateAddress("permanentAddress", "areaname", e.target.value)
        }
      />
      <input
        className="form-control mb-2"
        placeholder="CityName"
        value={perm.cityname || ""}
        onChange={(e) =>
          updateAddress("permanentAddress", "cityname", e.target.value)
        }
      />
      <input
        className="form-control mb-2"
        placeholder="District"
        value={perm.district || ""}
        onChange={(e) =>
          updateAddress("permanentAddress", "district", e.target.value)
        }
      />
      <input
        className="form-control mb-2"
        placeholder="State"
        value={perm.state || ""}
        onChange={(e) =>
          updateAddress("permanentAddress", "state", e.target.value)
        }
      />
      <input
        className="form-control mb-2"
        placeholder="PinCode"
        value={perm.pincode || ""}
        onChange={(e) =>
          updateAddress("permanentAddress", "pincode", e.target.value)
        }
      />

      {/* Current Address */}
      <h6 className="mt-4">Current Address</h6>
      <input
        className="form-control mb-2"
        placeholder="House Number"
        value={local.houseNumber || ""}
        onChange={(e) =>
          updateAddress("localAddress", "houseNumber", e.target.value)
        }
      />
      <input
        className="form-control mb-2"
        placeholder="StreetName"
        value={local.streetName || ""}
        onChange={(e) =>
          updateAddress("localAddress", "streetName", e.target.value)
        }
      />
      <input
        className="form-control mb-2"
        placeholder="AreaName"
        value={local.areaname || ""}
        onChange={(e) =>
          updateAddress("localAddress", "areaname", e.target.value)
        }
      />
      <input
        className="form-control mb-2"
        placeholder="CityName"
        value={local.cityname || ""}
        onChange={(e) =>
          updateAddress("localAddress", "cityname", e.target.value)
        }
      />
      <input
        className="form-control mb-2"
        placeholder="District"
        value={local.district || ""}
        onChange={(e) =>
          updateAddress("localAddress", "district", e.target.value)
        }
      />
      <input
        className="form-control mb-2"
        placeholder="State"
        value={local.state || ""}
        onChange={(e) =>
          updateAddress("localAddress", "state", e.target.value)
        }
      />
      <input
        className="form-control mb-2"
        placeholder="PinCode"
        value={local.pincode || ""}
        onChange={(e) =>
          updateAddress("localAddress", "pincode", e.target.value)
        }
      />

      <div className="d-flex justify-content-between mt-3">
        <button className="btn btn-secondary" onClick={prevStep}>
          Previous
        </button>
        <button className="btn btn-success" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Address;
