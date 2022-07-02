import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Grid, GridItem, Heading, Image, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ImageAdBlue from "../assets/img/adblue.png";
import Imageplus from "../assets/img/diesel-plus.png";
import ImageDiesel from "../assets/img/diesel.png";
import ImageGas from "../assets/img/gasoil.png";


export default function Product() {
  const navegate = useNavigate();
  const typesGasoil = [
    {
      type: "Regular Gasoline",
      price: "9035",
      imageSrc: ImageGas
    },

    {
      type: "Diesel",
      price: "8652",
      imageSrc: ImageDiesel
    },

    {
      type: "Biodiesel",
      price: "7963",
      imageSrc: ImageAdBlue
    },

    {
      type: "Diesel Plus",
      price: "10342",
      imageSrc: Imageplus
    },


  ]

  const clickGasoil =(typesGasoil, priceGasiol) =>{
    localStorage.setItem("typeGaseoil", typesGasoil);
    localStorage.setItem("priceGaseoil", priceGasiol);
    navegate("/method-payment");
  };
  return (
    <>
      <Heading textAlign="center" size="lg" marginBottom={50}>
        Select a Product
      </Heading>

    <Grid templateColumns="repeat(2, 3fr)" gap={10}>
        {typesGasoil.map((gasoil, index) => (
          <GridItem
            key={index}
            w="100%"
            borderRadius="10"
            padding="4"
            cursor="pointer"
            textAlign="center"
            boxShadow="0px 4px 10px -3px rgb(117, 117, 117);"
            _hover={{
              bgGradient: "linear(to-r, blue.200, cyan.100)",
              shadow: "2xl",
            }}

            onClick={() => clickGasoil(gasoil.type, gasoil.price)}
          >
          
          <Box>
              <Heading size="md" fontWeight="extrabold">
                {gasoil.type}
              </Heading>
              <Box
                display="flex"
                justifyContent="space-evenly"
                alingItems="center"
                marginTop={5}
                marginBottom={10}
              >
                <Heading size="sm">Current Price</Heading>
                <Heading size="md" fontWeight="extrabold">
                  ${gasoil.price}
                </Heading>
              </Box>
            </Box>
            <Image
              src={gasoil.imageSrc}
              alt={gasoil.type}
              width={90}
              margin="0 auto"
            />
          </GridItem>
        ))}
      </Grid>
      <Box marginTop="40px">
      <Stack
      direction="row"
      spacing={4}
      cursor="pointer"
      onClick={()=> navegate("/surtidor")}
      >
      <Button
      leftIcon={<ArrowBackIcon/>}
      colorScheme="twitter"
      variant="outline"
      >
      Back to Supplier
      </Button>
      </Stack>
      </Box>

    </>
  )
};
