import { CurrentUserLoader } from "./CurrentUserLoader";
import { DataSource } from "./DataSource";
import { ProductInfo } from "./ProductInfo";
import { ResourceLoader } from "./ResourceLoader";
import { SplitScreen } from "./SplitScreen";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";
import axios from 'axios'

const userIds = ['123', '234', '345'];

const getUserData = url => async () => {
	const response = await axios.get(url);
	return response.data;
}

const getLocalStorageData = key => () => {
	const response = localStorage.getItem(key);
	return response
}

const LocalStorageInfo = ({ message }) => <h1>{message}</h1>

function App() {
	return (
		<SplitScreen>
			<>
				{userIds.map((userId, i) =>
					<UserLoader key={i} userId={userId}>
						<UserInfo />
					</UserLoader>)}
			</>
			<>
				<ResourceLoader
					resourceURL={'http://localhost:8080/users/234'}
					resourceName={'user'}>
					<UserInfo />
				</ResourceLoader>
				<ResourceLoader
					resourceURL={'http://localhost:8080/products/1234'}
					resourceName={'product'}>
					<ProductInfo />
				</ResourceLoader>
				<DataSource
					getDataFunc={getUserData("http://localhost:8080/users/345")}
					resourceName={'user'}>
					<UserInfo />
				</DataSource>
				<DataSource
					getDataFunc={getLocalStorageData('message')}
					resourceName={'message'}>
					<LocalStorageInfo />
				</DataSource>
			</>
		</SplitScreen>
	);
}

export default App;