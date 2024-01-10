// Importe os tipos necessários, ajustando conforme necessário
import Grid from '@mui/material/Grid';
import { UserDataType } from 'src/context/types';

interface ProfileTabProps {
  userData: UserDataType;
}

const ProfileTab: React.FC<ProfileTabProps> = ({ userData }) => {
  console.log(userData);

  return (
    <Grid container spacing={6}>
      <Grid item lg={8} md={7} xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <h1>informações de usuários</h1>
            {/* Adicione aqui a lógica para exibir as informações do usuário */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileTab;
