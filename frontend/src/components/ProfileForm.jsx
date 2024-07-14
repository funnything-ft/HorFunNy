import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import UIInput from "../components/UIInput";
import UIButton from "../components/UIButton";
import UITextareaInput from "../components/UITextareaInput";
import UISelectInput from "../components/UISelectInput";

function ProfileForm() {
  const { name, desc, gender } = useRouteLoaderData("profile-detail");
  const genderOptions = {
    Male: "M",
    Female: "F",
    Unknown: "U",
  };
  return (
    <div className="px-14">
      <p className="font-bold">Basic Info: </p>
      <UIInput
        label="Name"
        id="name"
        type="text"
        value={name}
        className="mb-4"
      />
      <UITextareaInput
        label="Description"
        id="desc"
        value={desc}
        className="mb-4"
      />
      <UISelectInput
        options={genderOptions}
        label="Gender"
        id="gender"
        value={gender}
        className="mb-4"
      />
      <UIButton className="w-32 mb-4" variant="primary" size="lg" type="button">
        Save
      </UIButton>
    </div>
  );
}

export default ProfileForm;
