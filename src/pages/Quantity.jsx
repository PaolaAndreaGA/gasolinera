import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Grid, GridItem, Heading, Image, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

export default function Quantity() {
  const [counter, setCounter] = useState("")
  const navegate = useNavigate();

  useEffect(() => {
    localStorage.setItem("quantity", counter);
  }, [counter]);

  const sumCounter = (number) => {
    setCounter(counter + number);
  };

  const clearCounter = () => {
    setCounter("");
  };
  return (
    <>
      <Grid marginBottom={2}>
        <Heading size="lg"> Enter the amount of gallons</Heading>
        <Heading size="lg" fontWeight="800"> 
        {counter ? <>{counter}</>: <>0</>}
        </Heading>
      </Grid>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {numbers.map((number) => (
          <GridItem
            key={number}
            w="100%"
            h="20"
            bgGradient="linear(to-r, blue.200, blue.500)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontWeight="700"
            fontSize="30px"
            boxShadow="0px 4px 10px -3px rgb(117 117 117 )"
            cursor="pointer"
            _hover={{ shadow: "2xl" }}
            onClick={() => sumCounter(number)}
          >{number}</GridItem>
        ))}
      </Grid>

      <Grid templateColumns="repeat(3, 1fr)" gap={6} marginTop="30px">

        <GridItem
          w="100%"
          h="20"
          bgGradient="linear(to-r, blue.200, blue.500)"
          colSpan={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontWeight="700"
          fontSize="30px"
          boxShadow="0px 4px 10px -3px rgb(117 117 117 )"
          cursor="pointer"
          _hover={{ shadow: "2xl" }}
          onClick={() => sumCounter(0)}
        >
          0
        </GridItem>

        <GridItem
          w="100%"
          h="20"
          bgGradient="linear(to-r, blue.100, cyan.600)"
          colSpan={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontWeight="700"
          boxShadow="0px 4px 10px -3px rgb(117 117 117 )"
          fontSize="30px"
          cursor="pointer"
          _hover={{ shadow: "2xl" }}
          onClick={clearCounter}
        >
          Delete
        </GridItem>

      </Grid>
      <Box marginTop="40px">
        <Stack
          direction="row"
          spacing={4}
          cursor="pointer"
          display="flex"
          justifyContent="space-between"
        >
          <Button
            leftIcon={<ArrowBackIcon />}
            colorScheme="twitter"
            variant="outline"
            size="lg"
            onClick={() => navegate("/method-payment")}
          >
            Back to Method Payment
          </Button>
          <Button
          rightIcon={<ArrowForwardIcon/>}
          colorScheme="twitter"
          variant="solid"
          size="lg"
          onClick={() => navegate("/resume")}
        >
          Continue to Summary
        </Button>
        </Stack>
      </Box>
    </>
  );
};
