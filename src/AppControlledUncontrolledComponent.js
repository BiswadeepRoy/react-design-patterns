import { useState } from "react";
import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from "./ControlledModal";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

const Step1 = ({ goToNext }) => {
    return <>
        <h1>Step 1</h1>
        <button onClick={() => goToNext({ name: "Roy" })}>Next</button>
    </>
}

const Step2 = ({ goToNext }) => {
    return <>
        <h1>Step 2</h1>
        <button onClick={() => goToNext({ age: 70 })}>Next</button>
    </>
}

const Step3 = ({ goToNext }) => {
    return <>
        <h1>Step 3</h1>
        <h3>Congratulations you are eligible for the discount</h3>
        <button onClick={() => goToNext({})}>Next</button>
    </>
}

const Step4 = ({ goToNext }) => {
    return <>
        <h1>Step 4</h1>
        <button onClick={() => goToNext({ hairColor: "Olive" })}>Next</button>
    </>
}

function App() {
    const [shouldShowModal, setShouldShowModal] = useState(false)
    const shouldShowControlledForm = false;
    const shouldShowControlledModal = false;
    const shouldShowUncontrolledOnboardingFlow = false;
    const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const onNext = stepData => {
        const updatedData = {
            ...onboardingData,
            ...stepData
        };
        setOnboardingData(updatedData)
        setCurrentIndex(currentIndex + 1);
        console.log(updatedData)
    }

    return (
        <>
            {shouldShowControlledForm && <ControlledForm />}
            {shouldShowControlledModal && <><button onClick={() => setShouldShowModal(!shouldShowModal)}>Show Modal</button>
                <ControlledModal shouldShow={shouldShowModal} onRequestClose={() => setShouldShowModal(false)}>
                    Hello
                </ControlledModal></>}
            {shouldShowUncontrolledOnboardingFlow && <UncontrolledOnboardingFlow onFinish={(data) => {
                alert("Onboarding Completed!")
                console.log(data)
            }}>
                <Step1 />
                <Step2 />
                <Step3 />
            </UncontrolledOnboardingFlow>}
            <ControlledOnboardingFlow
                currentIndex={currentIndex}
                onNext={onNext}
                onFinish={(data) => {
                    alert("Onboarding Completed!")
                    console.log(data)
                }}>
                <Step1 />
                <Step2 />
                {(onboardingData.age > 64) && <Step3 />}
                <Step4 />
            </ControlledOnboardingFlow>
        </>
    );
}

export default App;