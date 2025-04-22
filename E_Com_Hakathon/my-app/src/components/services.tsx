import { Truck, Heart, Users, Gift } from "lucide-react"; // Importing icons from Lucide

const ServicesComponent = () => {
  // Array to hold services data
  const services = [
    {
      id: 1,
      title: "Fast Delivery",
      description: "Get your products delivered to you within the shortest time.",
      icon: <Truck />,
    },
    {
      id: 2,
      title: "Customer Support",
      description: "24/7 support to assist you with any inquiries or issues.",
      icon: <Heart />,
    },
    {
      id: 3,
      title: "Expert Team",
      description: "Our skilled professionals are here to help you with your needs.",
      icon: <Users />,
    },
    {
      id: 4,
      title: "Special Offers",
      description: "Exclusive discounts and offers for our loyal customers.",
      icon: <Gift />,
    },
  ];

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1440px] mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 border hover:shadow-xl transition duration-300 ease-in-out hover:bg-yellow-50"
            >
              <div className="mb-4 text-yellow-600 text-4xl">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
