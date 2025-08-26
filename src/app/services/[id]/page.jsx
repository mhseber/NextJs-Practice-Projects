const ServicesDetailPage = ({ params }) => {
  const data = [
    {
      id: 1,
      service_name: "Web Development",
      service_img:
        "https://i.pinimg.com/736x/52/6a/8d/526a8d729c5054ea2f1acc66fac2fe8f.jpg",
      service_description:
        "We build modern, responsive, and SEO-friendly websites tailored to your business needs.",
    },
    {
      id: 2,
      service_name: "Graphic Design",
      service_img:
        "https://i.pinimg.com/736x/52/6a/8d/526a8d729c5054ea2f1acc66fac2fe8f.jpg",
      service_description:
        "Our creative team delivers stunning visuals, branding, and marketing materials to make your brand stand out.",
    },
    {
      id: 3,
      service_name: "Digital Marketing",
      service_img:
        "https://i.pinimg.com/736x/52/6a/8d/526a8d729c5054ea2f1acc66fac2fe8f.jpg",
      service_description:
        "Grow your business with our expert digital marketing strategies, including SEO, SEM, and social media campaigns.",
    },
    {
      id: 4,
      service_name: "Mobile App Development",
      service_img:
        "https://i.pinimg.com/736x/52/6a/8d/526a8d729c5054ea2f1acc66fac2fe8f.jpg",
      service_description:
        "We create high-performance Android and iOS apps with seamless user experiences and cutting-edge technology.",
    },
  ];
  const { id } = params;
  const singleData = data.find((d) => d.id == id);
  return (
    <div>
      <h1>ServicesDetailPage</h1>
      <p>ID: {id}</p>
      <p>{singleData.service_name}</p>
      <img src={singleData.service_img} alt="img" />
    </div>
  );
};

export default ServicesDetailPage;
