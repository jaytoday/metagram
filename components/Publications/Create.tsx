import { Flex, IconButton, Input } from "@chakra-ui/react"
import React, { useState, useRef, useEffect } from "react"
import { AddIcon } from "@chakra-ui/icons"
import useCustomToast from "../../hooks/useCustomToast"
import useCreatePub from "../../hooks/useCreatePub"
import { AiOutlineCloudUpload } from "react-icons/ai"

function Create() {
    const inputFile = useRef(null)
    const [file, setFile] = useState<MediaSource | Blob>(undefined!)
    const publish = useCreatePub()
    const toast = useCustomToast()
    const handleChange = (event) => setFile(event.target.files[0])
    const handlePublish = async () => {
        await publish(file).then((res) => {
            res ? setFile(undefined!) : toast("error", "could not publish", "puberr")
        })
    }

    useEffect(() => {
        if (file && file?.type !== "video/mp4") {
            toast("info", "only video/mp4 contents are surpported!", "publishV")
            setFile(undefined!)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file])

    return (
        <Flex
            w="100%"
            maxW={320}
            h={150}
            gap={20}
            justifyContent="center"
            alignItems="center"
            my="20px"
            bg="gray.500"
            borderRadius="lg"
        >
            <IconButton
                onClick={file ? handlePublish : () => inputFile.current.click()}
                colorScheme={file ? "orange" : "blue"}
                aria-label="publish"
                icon={file ? <AiOutlineCloudUpload /> : <AddIcon />}
                color="white"
            />
            <Input display="none" ref={inputFile} type="file" onChange={handleChange} />
        </Flex>
    )
}

export default Create
