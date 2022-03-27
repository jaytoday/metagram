import React, { useState, useRef } from "react"
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    VStack,
    useColorModeValue,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
} from "@chakra-ui/react"
import { SmallCloseIcon } from "@chakra-ui/icons"
import useCreateProfile from "../../hooks/useCreateProfile"
import useCustomToast from "../../hooks/useCustomToast"

function CreateProfile() {
    const inputFile = useRef(null)
    const [file, setFile] = useState<MediaSource | Blob>(undefined!)
    const [profileHandle, setProfileHandle] = useState<string>("")
    const runCreate = useCreateProfile()
    const handleChange = (event) => setFile(event.target.files[0])
    const toast = useCustomToast()
    const onSubmit = async () => {
        await runCreate(file, profileHandle)
    }

    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack
                spacing={4}
                maxW={"md"}
                bg={useColorModeValue("white", "gray.700")}
                rounded={"xl"}
                boxShadow={"lg"}
                p={6}
                my={12}
            >
                <Heading lineHeight={1.1} fontSize={{ base: "xl", sm: "2xl" }} textAlign="center">
                    Mint Profile
                </Heading>
                <FormControl id="profileImg" isRequired>
                    <Center>
                        <VStack spacing={6}>
                            <Avatar size="xl" src={file ? URL.createObjectURL(file) : ""}>
                                <AvatarBadge
                                    as={IconButton}
                                    size="xs"
                                    rounded="full"
                                    top="-10px"
                                    colorScheme="red"
                                    aria-label="remove Image"
                                    icon={<SmallCloseIcon />}
                                    onClick={() => setFile(undefined!)}
                                />
                            </Avatar>
                            <Center>
                                <Button onClick={() => inputFile.current.click()}>
                                    {file ? "change" : "upload"}
                                </Button>
                                <Input
                                    display="none"
                                    ref={inputFile}
                                    type="file"
                                    onChange={handleChange}
                                />
                            </Center>
                        </VStack>
                    </Center>
                </FormControl>
                <FormControl id="handle" isRequired>
                    <FormLabel>profile handle</FormLabel>
                    <Input
                        placeholder="your profile handle"
                        _placeholder={{ color: "gray.500" }}
                        type="text"
                        onChange={(e) => setProfileHandle(e.currentTarget.value)}
                    />
                </FormControl>
                <Button
                    type="submit"
                    bg={"teal"}
                    color={"white"}
                    _hover={{
                        bg: "teal.500",
                    }}
                    onClick={
                        file && profileHandle
                            ? onSubmit
                            : () => toast("error", "cannot be empty", "createprofile")
                    }
                >
                    Mint
                </Button>
            </Stack>
        </Flex>
    )
}

export default CreateProfile
