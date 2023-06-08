import type { NextPageWithLayout } from '@/pages/_app'
import { useAuthContext } from '@/contexts/AuthContext'
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import UserAvatarUploadSection from '@/components/organisms/UserAvatarUploadSection'
import AppLayout from '@/components/templates/AppLayout'

const SettingsPage: NextPageWithLayout = () => {
  const { user } = useAuthContext()

  // Form data: name, email, password, photoURL, City, State, ZipCode, Country;

  return (
    <div>
      <UserAvatarUploadSection
        user={{
          displayName: user?.displayName ?? '',
          photoURL: user?.photoURL ?? '',
        }}
      />
      <form
        style={{
          maxWidth: 'max-content',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '1.5rem',
        }}
      >
        <h2>Personal Information</h2>
        <Input
          defaultValue={user?.displayName ?? ''}
          fullWidth={true}
          label="Name"
          placeholder="Your name"
        />

        <Input
          defaultValue={user?.email ?? ''}
          label="Email"
          placeholder="Your email"
        />

        {/* <h2>Security</h2> */}
        {/* <Input
          defaultValue={user?.password ?? ''}
          label="Password"
          placeholder="Your password"
        /> */}

        <Button type="submit">Save</Button>
      </form>
    </div>
  )
}

SettingsPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>
}

export default SettingsPage
