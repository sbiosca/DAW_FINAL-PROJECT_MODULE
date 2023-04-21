import React, {Suspense, useContext} from "react";

const DashboardComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../components/dashboard/DashboardComponent")), 1500)
    })
})

const DashboardPage = () => {
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="https://usagif.com/wp-content/uploads/loading-4.gif"/></div>}>
            <DashboardComponent/>
        </Suspense>
    )

}

export default DashboardPage