import useWeb3Storage from './useWeb3Storage';
import dappStore from '../stores/dappStore';

function useCreateProfile() {
    const store = useWeb3Storage()
    const profileState = dappStore((state) => state)

    async function runCreate(file: MediaSource | Blob, handle: string) {
        try {
            const { uri } = await store(file as File)
            profileState.setProfile({ profileImage: uri, profileHandle: handle })
            return true
        } catch (error) {
            console.log(error)
            return false
        }

    }
    return runCreate;
}

export default useCreateProfile