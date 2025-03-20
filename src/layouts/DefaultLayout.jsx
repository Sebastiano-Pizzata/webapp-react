import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Loader from '../components/Loader'
import { useGlobalContext } from '../context/GlobalContext';

const DefaultLayout = () => {

    const { isLoading } = useGlobalContext()
    return (
        <>
            <Header />
            <main className='container'>
                <Outlet />
            </main>
            {isLoading && <Loader />}
        </>
    )
}

export default DefaultLayout