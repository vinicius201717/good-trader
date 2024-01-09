// ** Next Import
// import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
// import { api } from 'src/lib/axios'

// ** Demo Components Imports
import UserProfile from 'src/views/pages/user-profile/UserProfile'

//{ tab, data }: InferGetStaticPropsType<typeof getStaticProps>

const UserProfileTab = () => {
  return <UserProfile />
}

// export const getStaticPaths: GetStaticPaths = () => {
//   return {
//     paths: [
//       { params: { tab: 'profile' } },
//       { params: { tab: 'teams' } },
//     ],
//     fallback: false
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
//   const res = await api.get('/auth/me', { params: { tab: params?.tab } })
//   const data: any = res.data

//   return {
//     props: {
//       data,
//       tab: params?.tab
//     }
//   }
// }

export default UserProfileTab
