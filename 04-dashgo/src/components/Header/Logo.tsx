import {Text} from '@chakra-ui/react'

export function Logo(){
    return(
        <Text
            fontSize="3xl"
            fontWeight="bold"
            letterSpacin="tight"
            w="64"
        >
            dashgo
            <Text as="span" ml="1 " color="cyan.500">.</Text>
        </Text>
    );
}