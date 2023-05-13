import { UserInfo } from './UserInfo'
import { printProps } from './PrintProps';
import { withUser } from './WithUser';
import { UserInfoFrom } from './UserInfoForm';

const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, '123');

function App() {
    return (
        <>
            <UserInfoWrapped a={10} b={'MuiMui'} c={{ name: 'PuiPui' }} />
            <UserInfoWithLoader />
            <UserInfoFrom />
        </>
    );
}

export default App;