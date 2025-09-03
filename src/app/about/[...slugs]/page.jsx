import React from "react";

const async  AboutSlugPage = ({ params }) => {
    const p  = await params
    console.log(p);
  return <div>AboutSlugPage</div>;
};

export default AboutSlugPage;
