import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { AppRouter } from '../routers/AppRouter'

library.add(fas);

const App = () => {
    return <AppRouter />
}

export default App