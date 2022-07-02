import { Image, Box, Stack, Heading } from "@chakra-ui/react";
import ImageClick from "../assets/img/cursor.png";
import ImageClient from "../assets/img/button.png";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navegate = useNavigate();
  const buttonStart = () => {
    navegate("/surtidor")
  }
  return (
    <Box w="100%">
      <Stack spacing={8} position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
        <Box
          p={5}
          borderRadius="10"
          bgGradient="linear(to-r, blue.300, cyan.300)"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          cursor="pointer"
          shadow="base"
          _hover={{ shadow: "2xl" }}
          onClick={buttonStart}
        >
          <div>
            <Heading fontSize="7xl" color="white">
              Start
            </Heading>
            <Heading fontSize="4xl" color="white">
              Press here
            </Heading>
          </div>
          <Image src={ImageClick} width="100px" margin="0 auto"/>

        </Box>
       <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          borderRadius="10"
        >
          <Heading fontSize="4xl">Welcome to New Generation</Heading>
          
        </Box> 

      </Stack>
    </Box>
  );
};
