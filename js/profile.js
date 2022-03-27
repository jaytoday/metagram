
web3.connect("testnet_rpc")
const contractabi = web3.abi({});
const contract = contractabi.at(proxy_addr);

/*
    struct CreateProfileData {
        address to;
        string handle;
        string imageURI;
        address followModule;
        bytes followModuleData;
        string followNFTURI;
    }
    const inputStruct: CreateProfileDataStruct = {
    to: user.address,
    handle: 'zer0dot',
    imageURI:
        'https://ipfs.fleek.co/ipfs/ghostplantghostplantghostplantghostplantghostplantghostplan',
    followModule: ZERO_ADDRESS,
    followModuleData: [],
    followNFTURI:
        'https://ipfs.fleek.co/ipfs/ghostplantghostplantghostplantghostplantghostplantghostplan',
    };
*/

/*
    struct PostData {
        uint256 profileId;
        string contentURI;
        address collectModule;
        bytes collectModuleData;
        address referenceModule;
        bytes referenceModuleData;
    }
*/

contract.createProfile()