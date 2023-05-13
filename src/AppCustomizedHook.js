import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";
import { useCurrentUser } from "./useCurrentUser";
import { useResource } from "./useResource";
import { useUser } from "./useUser";
import { useDataSource } from "./useDataSource";
import { SplitScreen } from './SplitScreen'
import axios from "axios";

function App() {

    const currentUser = useCurrentUser();
    const userOne = useUser('123');

    const UserTwoInfo = ({ userId }) => {
        const userTwo = useResource(`http://localhost:8080/users/${userId}`);
        return <UserInfo user={userTwo} />
    }

    const ProductOneInfo = ({ productId }) => {
        const productOne = useResource(`http://localhost:8080/products/${productId}`);
        return <ProductInfo product={productOne} />
    }

    const serverResourceFetchFunction = (resourceUrl) => {
        return (async () => {
            const response = await axios.get(resourceUrl);
            return response.data;
        });
    }

    const localStorageResourceFetchFunction = (key) => {
        return () => {
            return localStorage.getItem(key);
        };
    }

    const ProductTwoInfo = ({ productId }) => {
        const productTwo = useDataSource(serverResourceFetchFunction(`http://localhost:8080/products/${productId}`));
        return <ProductInfo product={productTwo} />
    }

    const MessageInfo = ({ keyName }) => {
        const value = useDataSource(localStorageResourceFetchFunction(keyName));
        return <h3>{value}</h3>
    }

    const showCurrentAndUseUserHook = false;

    return (
        <>
            <SplitScreen>
                {/* {showCurrentAndUseUserHook && <SplitScreen>
                    <UserInfo user={currentUser} />
                    <UserInfo user={userOne} />
                </SplitScreen>} */}
                <SplitScreen>
                    <UserTwoInfo userId={'234'} />
                    <ProductOneInfo productId={'1234'} />
                </SplitScreen>
                {!showCurrentAndUseUserHook && <SplitScreen>
                    <ProductTwoInfo productId={'2345'} />
                    <MessageInfo keyName={'message'} />
                </SplitScreen>}
            </SplitScreen>
        </>
    );
}

export default App;