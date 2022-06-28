import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData=true}: ProfileProps){
    return(
        <Flex align="center" >
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>
                        Mairon Santana
                    </Text>
                    <Text color="gray.300" fontSize="small">
                        maironnscmt@gmail.com
                    </Text>
                </Box>
            )}
            <Avatar size="md" name="Mairon Santana" src="https://github.com/maironsantana.png"/>
        </Flex>
    );
}