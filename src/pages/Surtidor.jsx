import { Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import ImageCar from '../assets/img/car.png';
import { useNavigate } from "react-router-dom";

export default function Surtidor() {
  const navegate = useNavigate();

  const suppliers = [
    {
      id: 1,
      name: "supplier 1"
    },
    {
      id: 2,
      name: "supplier 2"
    },
    {
      id: 3,
      name: "supplier 3"
    },
    {
      id: 4,
      name: "supplier 4"
    },
    {
      id: 5,
      name: "supplier 5"
    },
    {
      id: 6,
      name: "supplier 6"
    },
  ]

  const clickSuppliers = (id) => {
    localStorage.setItem("supplier", id);
    navegate("/Product");
  };

  return (
    <>
      <Heading textAlign="center" marginBottom="5">
        Select a Supplier
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={9}>
        {suppliers.map((supplier) => (
          <GridItem
            key={supplier.id}
            w="100%"
            h="40"
            margin="5"
            borderRadius="10"
            padding="4"
            cursor="pointer"
            textAlign="center"
            boxShadow="0px 4px 10px -3px rgb(117 117 117);"
            _hover={{
              background: "linear-gradient(to right, var(--chakra-colors-blue-200), var(--chakra-colors-cyan-100))",
              color: "",
              shadow: "2xl",
            }}
            onClick={() => clickSuppliers(supplier.id)}
          >
           
            <Heading size="lg"textTransform="capitalize">{supplier.name} </Heading>
            <Image src={ImageCar} alt={supplier.name} width={100} margin="0 auto"/>
          </GridItem>
        ))} 
      </Grid>

    </>
          
  );
};
