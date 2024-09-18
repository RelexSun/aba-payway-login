import React from "react";
import ContentSection from "../components/content-section";
import Account from "../components/account";

const page = () => {
  return (
    <ContentSection
      title="Account"
      desc="Update your account settings. Set your preferred language and timezone."
    >
      <Account />
    </ContentSection>
  );
};

export default page;
