import * as React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import { UrlData } from '../UrlData';
import { serverUrl } from '../../helpers/Constants';
import axios from 'axios';
import DataTable from '../DataTable/DataTable';
interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = () => {
    const [data,setData] = React.useState<UrlData[]>([]);
    const fetchTable= async()=>{
        const response = await axios.get(`${serverUrl}/shortUrl`);
        setData(response.data);
        console.log(data);
    }
    React.useEffect(()=>{
        fetchTable();
    },[])
  return(
    <div className="container">
        <FormContainer />
        <DataTable data={data}/>
    </div>
  ) ;
};

export default Container;
