import React from "react";
import ContentSection from "../components/content-section";
import Profile from "../components/profile";

const page = () => {
  return (
    <ContentSection
      title="Profile"
      desc="This is how others will see you on the site."
    >
      <Profile />
    </ContentSection>
  );
};

export default page;
