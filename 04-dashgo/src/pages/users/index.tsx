import { Box, Flex, Heading, Button, Icon, Table, Text, Thead, Tbody, Tr, Th, Td, Checkbox } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Sidebar } from "../../components/Sidebar";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";

export default function UserList() {
    return(
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8" >
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal" >Listagem de Ususários</Heading>

                        <Button as="a" size="sm" fontSize="sm" colorScheme="cyan" leftIcon={<Icon as={RiAddLine} fontSize="16" />} >
                            Criar novo usuário
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="cyan" />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th w="6"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                <Checkbox colorScheme="cyan" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold" >Mairon Santana</Text>
                                        <Text fontSize="sm" color="gray.300" >maironnscmt@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>24/04/2022</Td>
                                <Td>
                                    <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="20" />} >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />

                </Box>
            </Flex>

        </Box>
    );
}