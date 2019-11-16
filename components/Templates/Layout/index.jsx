import Link from 'next/link'

import CardContainer from '../../Atoms/CardContainer'
import { Grid } from './styles'

import Logo, {WrappedLogo} from '../../Atoms/Logo'
import UserAvatar from '../../Atoms/UserAvatar'

function LayoutDefault({children}) {
  return (
    <Grid>
      <header>
        <Link href="/">
          <WrappedLogo widthSize="120px" />
        </Link>
        <div>
          <UserAvatar />
        </div>
      </header>
      <section className="content">
        <CardContainer>
          {children}
        </CardContainer>
      </section>
    </Grid>
  )
}

export default LayoutDefault
