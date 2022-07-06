import { Box, Flex, Heading, Button, Icon, Table, Text, Thead, Tbody, Tr, Th, Td, Checkbox, useBreakpointValue, Spinner } from "@chakra-ui/react";
import { RiAddLine } from 'react-icons/ri';
import { Sidebar } from "../../components/Sidebar";
import { useQuery } from 'react-query'

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";

import Link from "next/link";
import { useEffect } from "react";

export default function UserList() {

    const { data, isLoading, error }  = useQuery('users', async () => {
        const response = await fetch('http://localhost:3000/api/users')
            const  data = await response.json()
            
            return data;
    })
    
    console.log()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return(
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8" >
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal" >Ususários</Heading>
                        <Link href="/users/create" passHref>
                            <Button as="a" size="sm" fontSize="sm" colorScheme="cyan" leftIcon={<Icon as={RiAddLine} fontSize="16" />} >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    { isLoading ? (
                        <Flex justify="center" >
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Falha ao obter dados dos usuários</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme="whiteAlpha">
                                <Thead>
                                    <Tr>
                                        <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                            <Checkbox colorScheme="cyan" />
                                        </Th>
                                        <Th>Usuário</Th>
                                        { isWideVersion && <Th>Data de cadastro</Th>}
                                        <Th w="6"></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td px={["4", "4", "6"]}>
                                        <Checkbox colorScheme="cyan" />
                                        </Td>
                                        <Td>
                                            <Box>
                                                <Text fontWeight="bold" >Mairon Santana</Text>
                                                <Text fontSize="sm" color="gray.300" >maironnscmt@gmail.com</Text>
                                            </Box>
                                        </Td>
                                        { isWideVersion && <Td>24/04/2022</Td>}
                                    </Tr>
                                    <Tr>
                                        <Td px={["4", "4", "6"]}>
                                        <Checkbox colorScheme="cyan" />
                                        </Td>
                                        <Td>
                                            <Box>
                                                <Text fontWeight="bold" >Mairon Santana</Text>
                                                <Text fontSize="sm" color="gray.300" >maironnscmt@gmail.com</Text>
                                            </Box>
                                        </Td>
                                        { isWideVersion && <Td>24/04/2022</Td>}
                                    </Tr>
                                </Tbody>
                            </Table>

                            <Pagination />
                        </>
                    ) }

                </Box>
            </Flex>

        </Box>
    );
}