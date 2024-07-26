import React, { useState } from "react";
import { Form, useRouteLoaderData, json } from "react-router-dom";
import UIInput from "../components/UIInput";
import UIButton from "../components/UIButton";
import UITextareaInput from "../components/UITextareaInput";
import UISelectInput from "../components/UISelectInput";
import apiInstance from "../utils/axios";

const genderOptions = {
  Male: "M",
  Female: "F",
  Unknown: "U",
};

function ProfileForm({ action }) {
  const data = useRouteLoaderData("profile-detail");
  const { profile } = data;
  const { name, desc, gender } = profile;
  const [userInput, setUserInput] = useState({
    name,
    desc,
    gender,
  });
  function handleInputChange(identifier, e) {
    setUserInput((prev) => ({
      ...prev,
      [identifier]: e.target.value,
    }));
  }
  return (
    <div className="px-14">
      <Form method="put">
        <p className="font-bold">Basic Info: </p>
        <UIInput
          label="Name"
          id="name"
          type="text"
          value={userInput.name}
          className="mb-4"
          onChange={(e) => handleInputChange("name", e)}
        />
        <UITextareaInput
          label="Description"
          id="desc"
          value={userInput.desc}
          className="mb-4"
          onChange={(e) => handleInputChange("desc", e)}
        />
        <UISelectInput
          options={genderOptions}
          label="Gender"
          id="gender"
          value={userInput.gender}
          className="mb-4"
          onSelectChange={(e) => handleInputChange("gender", e)}
        />
        <UIButton
          className="w-32 mb-4"
          variant="primary"
          size="lg"
          type="submit"
          name="action"
          value={action}
        >
          Save
        </UIButton>
      </Form>
    </div>
  );
}

export default ProfileForm;

export async function UpdateProfile(data) {
  return apiInstance
    .put("profile/edit/detail/", data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw json({ message: err.response.data.message }, { status: 500 });
    });
}
