// custom hook for toast
import { useToast } from "@chakra-ui/react";

export default function useCustomToast() {
    const toast = useToast();
    function call(status: "info" | "warning" | "success" | "error", description: string, toastId: string | number) {
        if (!toast.isActive(toastId)) {
            toast({
                id: toastId,
                duration: 5000,
                status: status,
                description: description,
                position: "top",
                isClosable: true,
            });
        }
    }

    return call;
}