import React, {Suspense} from "react";
import { useIntegrantes } from "../hooks/useIntegrantes";

const IntegrantesComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../components/integrantes/IntegrantesComponent")), 1500)
    })
})

const IntegrantesPage = () => {
    const {integrantes} = useIntegrantes()
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="https://usagif.com/wp-content/uploads/loading-4.gif"/></div>}>
            <IntegrantesComponent integrantes={integrantes}/>
        </Suspense>
    )

}

export default IntegrantesPage