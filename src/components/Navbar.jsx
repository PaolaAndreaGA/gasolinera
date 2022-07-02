import { Image, Box, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ImageShop from '../assets/img/shop.png';

export default function Navbar() {
  const navegate = useNavigate();
  const redirect = () => {
    navegate("/")
  };

  return (
    <Box
          display="block"
          alignItems="center"
          justifyContent="space-evenly"
          borderBottom="3px Solid #AED6F1" 
    >

      <Image
        src={ImageShop}
        alt="Logotype"
        width={100}
        margin="0 auto"
        cursor="pointer"
        onClick={redirect}
      />
      <Heading
        as="h1"
        size="sm"
        isTruncated
        textTransform="uppercase"
        textAlign="center"
        color="blue.300"
        fontWeight="900"
        fontSize="25px"
        paddingBottom="5"
      >Gas Station New Generation</Heading>


    </Box>
  );
};
