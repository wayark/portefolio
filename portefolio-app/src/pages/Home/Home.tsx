import Year from '../../components/Year/Year';
import './Home.css';
import {data} from '../../data/data';

function Home() {        
    return (
        <div className='home-page'>
            <h1>But</h1>
            {
                data.map((data) => {
                    return <Year year={data} />
                })
            }
        </div>
    );
}
export default Home;