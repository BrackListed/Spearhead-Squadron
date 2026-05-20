import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";




export default function App(){
  return(
    <div className="flex flex-col p-6 w-screen max-w-full box-border gap-5">
      <Header/>
      <Dashboard/>
    </div>
  )
}




