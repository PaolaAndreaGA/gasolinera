import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Grid, GridItem, Heading, Image, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ImageCash from "../assets/img/money.png";
import ImageCreditCard from "../assets/img/credit-card.png";

const payments = [
  {
    name: "Cash",
    image: ImageCash,
  },

  {
    name: "Credit Card",
    image: ImageCreditCard,
  },

];


export default function MethodPayment() {
  const navegate = useNavigate();
  const clickPayment = (paymentName) => {
      localStorage.setItem("payment", paymentName);
      navegate("/quantity");
  };
  return (
    <>
      <Box textAlign="center" marginBottom={10}>
        <Heading marginBottom={7} size="lg">
          Select your Payment Method
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={9} marginTop={4}>
          {payments.map((payment, index) => (
            <GridItem
              key={index}
              padding="4"
              borderRadius="10"
              boxShadow="0px 4px 10px -3px rgb(117 117 117);"
              cursor="pointer"
              _hover={{
                bgGradient: "linear(to-r, blue.200, cyan.100)",
                shadow: "2xl",
              }}
              onClick={() => clickPayment(payment.name)}
            >
              <Box
                justifyContent="space-evenly"
                alignItem="center"
                marginTop={4}
                marginBottom={3}
              >
                <Heading size="lg" minHeight="80px">
                  {payment.name}
                </Heading>
                <Image src={payment.image} alt={payment.name} width={100} margin="0 auto" />
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box marginTop="40px">
      <Stack
      direction="row"
      spacing={4}
      cursor="pointer"
      onClick={()=> navegate("/product")}
      >
      <Button
      leftIcon={<ArrowBackIcon/>}
      colorScheme="twitter"
      variant="outline"
      >
      Back to Product
      </Button>
      </Stack>
        </Box>
    </>

  );
};
