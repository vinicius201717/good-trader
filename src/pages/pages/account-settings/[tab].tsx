// ** Demo Components Imports
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'
import AccountSettings from 'src/views/pages/account-settings/AccountSettings'

const AccountSettingsTab = ({ tab }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <AccountSettings tab={tab} />
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { tab: 'account' } },
      { params: { tab: 'security' } },
      { params: { tab: 'billing' } },
      { params: { tab: 'notifications' } },
      { params: { tab: 'connections' } }
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  return {
    props: {
      tab: params?.tab
    }
  }
}

export default AccountSettingsTab
