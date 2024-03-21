import image1 from './image1.jpeg'
import image2 from './image2.jpeg'
import image3 from './image3.jpeg'
import image4 from './image4.jpeg'
import image5 from './image5.jpeg'

const expiredFoodData = [
    {
      imageUrl: image1,
      numberOfPlates: 15,
      pricePerItem: 1.00,
      foodDescription: "Left Over Rice - past its prime (for informational purposes only)",
      title: "Left Over Rice",
      expiryDate: "2022-10-10", // Ensure expiry precedes current date
      phoneNumber: "+1234567890",
    },
    {
      imageUrl: image2,
      numberOfPlates: 1,
      pricePerItem: 0.50,
      foodDescription: "Sliced bread with mold (for informational purposes only)",
      title: "Sliced Bread",
      expiryDate: "2022-09-25", // Ensure expiry precedes current date
      phoneNumber: "+0987654321",
      assured:true
    },
    {
      imageUrl: image3,
      numberOfPlates: 20,
      pricePerItem: 0.75,
      foodDescription: "Spoiled Meat (for informational purposes only)",
      title: "Wilted Romaine Lettuce",
      expiryDate: "2022-10-12", // Ensure expiry precedes current date
      phoneNumber: "+9876543210",
      assured:true
    },
    {
      imageUrl: image4,
      numberOfPlates: 6,
      pricePerItem: 0.25,
      foodDescription: "Bunch of overripe bananas with brown spots (for informational purposes only)",
      title: "Overripe Bananas",
      expiryDate: "2022-10-15", // Ensure expiry precedes current date
      phoneNumber: "+0123456789",
    },
    {
      imageUrl: image5,
      numberOfPlates: 2,
      pricePerItem: 0.75,
      foodDescription: "Container of yogurt past its expiration date (for informational purposes only)",
      title: "Expired Yogurt Container",
      expiryDate: "2022-10-08", // Ensure expiry precedes current date
      phoneNumber: "+9876543210",
    },
    // ... (add more expired food data with appropriate details)
  ];

  export default expiredFoodData;