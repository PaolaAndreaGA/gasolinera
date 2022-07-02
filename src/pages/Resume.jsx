import { Box, Button, Grid, GridItem, Heading, Image, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import ImageConf from "../assets/img/confeti.png"
import ImageCar from "../assets/img/car.png"
import ImageGasoil from "../assets/img/gasoil.png"
import ImageMoney from "../assets/img/methodpay.png"
import ImageDrop from "../assets/img/drop.png"
import ImageCapital from "../assets/img/capital.png"


export default function Resume() {
  const navegate = useNavigate();
  const supplier = localStorage.getItem("supplier");
  const typeGaseoil = localStorage.getItem("typeGaseoil");
  const priceGaseoil = localStorage.getItem("priceGaseoil");
  const payment = localStorage.getItem("payment");
  const quantity = localStorage.getItem("quantity");

  const finalPrice = priceGaseoil.replace(",", ".") * quantity;

  const resumeData = [
    {
      title: "Supplier",
      result: supplier,
      image: ImageCar
    },
    {
      title: "Product",
      result: typeGaseoil,
      image: ImageGasoil
    },
    {
      title: "Method Payment",
      result: payment,
      image: ImageMoney
    },
    {
      title: "Quantity",
      result: `${quantity} Gal`,
      image: ImageDrop
    },

  ];

  const returnHome = ()=>{
    localStorage.clear();
    navegate("/");
  }
  return (
    <>
      <Grid marginBottom={5} textAlign="center">
        <Heading size="lg">Buy made, go to the supplier!</Heading>
        <Image src={ImageConf} alt="congrats" width="80px" margin="0 auto" />
      </Grid>
      <Grid textAlign="center" paddingBottom="4rem">
        <Heading marginBottom="30px" size="lg"> Order Summary:</Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={9}>
          {resumeData.map((data, index) => (
            <GridItem
              w="100%"
              borderRadius="10"
              boxShadow="0px 4px 10px -3px rgb(117 117 117 )"
              padding="25px 15px"
              key={index}
            >
              <Box>
                <Heading size="sm">{data.title}</Heading>
                <Heading size="md" fontWeight="700">{data.result}</Heading>
              </Box>
              <Image src={data.image} alt={data.title} width="80px" margin="0 auto" />
            </GridItem>
          ))}
        </Grid>
        <Grid
          marginTop="20px"
          padding="20px"
          boxShadow="0px 4px 10px -3px rgb(117 117 117 )"
          borderRadius="10"
        >
          <Heading size="sm">Total to pay</Heading>
          <GridItem>
            <Heading size="md">$ {finalPrice}</Heading>
            <Image src={ImageCapital} alt="price" width="80px" margin="0 auto" />
          </GridItem>
        </Grid>
        <Box marginTop="40px">
          <Stack
            direction="row"
            spacing={4}
            cursor="pointer"
            onClick={returnHome}
          >
            <Button
              leftIcon={<ArrowBackIcon />}
              colorScheme="twitter"
              variant="outline"
            >
              Back to Home
            </Button>
          </Stack>
        </Box>

      </Grid>
    </>
  );
};
