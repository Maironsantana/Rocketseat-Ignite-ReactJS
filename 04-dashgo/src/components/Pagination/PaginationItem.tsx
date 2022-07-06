import { Button } from "@chakra-ui/react";

interface PaginationItemProps{
    number: number;
    IsCurrent?: boolean;
}

export function PaginationItem({ IsCurrent=false, number }: PaginationItemProps){
    if(IsCurrent) {
        return(
            <Button 
                fontSize="xs"
                size="sm"
                width="4"
                colorScheme="cyan"
                disabled
                _disabled={{
                    bgColor: "cyan.500",
                    cursor: 'default',
                }}
            >
                {number}
            </Button>
        );
    }

    return(
        <Button 
            fontSize="xs"
            size="sm"
            width="4"
            bg="gray.700"
            _hover={{
                bg:'gray.500'
            }}
        >
            {number}
        </Button>
    );
}