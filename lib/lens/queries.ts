import apolloClient from './apollo';
import { gql } from '@apollo/client'


interface CreateProfileInterface {
  handle: string
  profilePictureUri: string
  followNFTURI: null
  followModule: null
}

interface UpdateProfileInterface {
  profileId: string
  name: string
  bio: string
  location: string
  website: string
  twitterUrl: string
  coverPicture: string | null
}

interface GetProfilesInterface {
  ownedBy: []
  limit: number
}

interface CreatePostInterface {
  profileId: string
  contentURI: string
  collectModule: {
    revertCollectModule: boolean
  },
  referenceModule: {
    followerOnlyReferenceModule: boolean
  }
}

const createProfile = (handle: string, imgUri: string, createProfileRequest: CreateProfileInterface) => {
  return apolloClient.mutate({
    mutation: gql(`
        mutation($request: CreateProfileRequest!) { 
          createProfile(request: $request) {
            ... on RelayerResult {
              txHash
            }
            ... on RelayError {
              reason
            }
                  __typename
          }
       }
      `),
    variables: {
      request: createProfileRequest

    },
  })
}

const updateProfile = (profileInfo: UpdateProfileInterface) => {
  return apolloClient.mutate({
    mutation: gql(`
   mutation($request: UpdateProfileRequest!) { 
     updateProfile(request: $request) {
      id
     }
  }
 `),
    variables: {
      request: profileInfo,
    },
  })
}

const getProfiles = (request: GetProfilesInterface) => {
  return apolloClient.query({
    query: gql(`
   query($request: ProfileQueryRequest!) {
     profiles(request: $request) {
       items {
         id
         name
         bio
         location
         website
         twitterUrl
         picture {
           ... on NftImage {
             contractAddress
             tokenId
             uri
             verified
           }
           ... on MediaSet {
             original {
               url
               mimeType
             }
           }
           __typename
         }
         handle
         coverPicture {
           ... on NftImage {
             contractAddress
             tokenId
             uri
             verified
           }
           ... on MediaSet {
             original {
               url
               mimeType
             }
           }
           __typename
         }
         ownedBy
         depatcher {
           address
           canUseRelay
         }
         stats {
           totalFollowers
           totalFollowing
           totalPosts
           totalComments
           totalMirrors
           totalPublications
           totalCollects
         }
         followModule {
           ... on FeeFollowModuleSettings {
             type
             amount {
               asset {
                 symbol
                 name
                 decimals
                 address
               }
               value
             }
             recipient
           }
           __typename
         }
       }
       pageInfo {
         prev
         next
         totalCount
       }
     }
   }
 `
    ),
    variables: {
      request
    },
  })
}

const createPostTypedData = (createPostTypedDataRequest: CreatePostInterface) => {
  return apolloClient.mutate({
    mutation: gql(`
   mutation($request: CreatePublicPostRequest!) { 
     createPostTypedData(request: $request) {
       id
       expiresAt
       typedData {
         types {
           PostWithSig {
             name
             type
           }
         }
       domain {
         name
         chainId
         version
         verifyingContract
       }
       value {
         nonce
         deadline
         profileId
         contentURI
         collectModule
         collectModuleData
         referenceModule
         referenceModuleData
       }
     }
    }
  }
 `
    ),
    variables: {
      request: createPostTypedDataRequest
    },
  })
}

export { createProfile, getProfiles, updateProfile, createPostTypedData }