import { signedTypeData, getAddressFromSigner, splitSignature } from '../../utils/helper';
import { createPostTypedData } from '../lens/queries'
import { lensHub } from '../lens/lens';

export const createPost = async () => {
    // hard coded to make the code example clear
    const createPostRequest = {
        profileId: "0x03",
        contentURI: "ipfs://QmPogtffEF3oAbKERsoR4Ky8aTvLgBF5totp5AuF8YN6vl.json",
        collectModule: {
            revertCollectModule: false
        },
        referenceModule: {
            followerOnlyReferenceModule: false
        }
    };

    const result = await createPostTypedData(createPostRequest);
    const typedData = result.data.createPostTypedData.typedData;

    const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
    const { v, r, s } = splitSignature(signature);

    const tx = await lensHub.postWithSig({
        profileId: typedData.value.profileId,
        contentURI: typedData.value.contentURI,
        collectModule: typedData.value.collectModule,
        collectModuleData: typedData.value.collectModuleData,
        referenceModule: typedData.value.referenceModule,
        referenceModuleData: typedData.value.referenceModuleData,
        sig: {
            v,
            r,
            s,
            deadline: typedData.value.deadline,
        },
    });
    console.log(tx.hash);
}