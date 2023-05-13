import { RecursiveComponent } from "./RecursiveComponent";
import { DangerButton, BigSuccessButton } from './composition';
import { DangerButton as DangerButtonTwo, BigSuccessButton as BigSuccessButtonTwo} from './partiallyApply'

const nestedObject = {
    a: 1,
    b: {
        b1: 4,
        b2: {
            b23: 'Hello',
        },
        b3: {
            b31: {
                message: 'Hi',
            },
            b32: {
                message: 'Hi',
            }
        }
    },
    c: {
        c1: 2,
        c2: 3,
    }
}

function App() {
    return (
        <p>
            <RecursiveComponent data={nestedObject} />
            <div>
                <DangerButton text="Do not click!!!" />
                <BigSuccessButton text="Please click for success!!" />
            </div>
            <div>
                <DangerButtonTwo text="Do not click!!!" />
                <BigSuccessButtonTwo text="Please click for success!!" />
            </div>
        </p>
    );
}

export default App;