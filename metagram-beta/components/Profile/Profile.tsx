import React from "react"
import dappStore from "../../stores/dappStore"
import { VStack, Center, Avatar, AvatarBadge, Heading, IconButton } from "@chakra-ui/react"
import Curation from "../Publications"

function UserProfile() {
    const state = dappStore((state) => state)
    return (
        <>
            <Center mb={20}>
                <VStack spacing={6}>
                    <Avatar size="xl" src={state.profile?.profileImage}>
                        <AvatarBadge
                            as={IconButton}
                            size="xs"
                            rounded="full"
                            top="-10px"
                            colorScheme="green"
                            aria-label="online"
                        />
                    </Avatar>
                    <Center>
                        <Heading size="lg" color="gray.400">
                            {state.profile?.profileHandle}
                        </Heading>
                    </Center>
                </VStack>
            </Center>
            <Curation />
        </>
    )
}

export default UserProfile
