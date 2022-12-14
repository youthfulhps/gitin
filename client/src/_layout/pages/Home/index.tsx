import GridMain from '@layout/components/GridMain';
import SuspenseBoundary from '@shared/boundaries/SuspenseBoundary';
import Login from '../../../Login/components';
import UserProfile from '../../../UserProfile/components';
import Language from '../../../Language/components';
import Contribution from '../../../Contribution/components';
import Refactor from '../../../Refactor/components';

function HomePage() {
  return (
    <GridMain>
      <Login />
      <SuspenseBoundary gridArea="Profile">
        <UserProfile />
      </SuspenseBoundary>
      <SuspenseBoundary gridArea="Language">
        <Language />
      </SuspenseBoundary>
      <SuspenseBoundary gridArea="Contribution">
        <Contribution />
      </SuspenseBoundary>
      <SuspenseBoundary gridArea="Refactor">
        <Refactor />
      </SuspenseBoundary>
    </GridMain>
  );
}

export default HomePage;
