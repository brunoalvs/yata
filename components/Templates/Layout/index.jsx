import CardContainer from '../../Atoms/CardContainer'
import { Grid } from './styles'

import Logo from '../../Atoms/Logo'
import UserAvatar from '../../Atoms/UserAvatar'

function LayoutDefault() {
  return (
    <Grid>
      <header>
        <Logo widthSize="120px" />
        <div>
          <UserAvatar />
        </div>
      </header>
      <section className="content">
        <CardContainer>
          <h1>Title Section</h1>

          <div>
            <p>Conteúdo aqui!</p>
          </div>
        </CardContainer>
      </section>
    </Grid>
  )
}

export default LayoutDefault
