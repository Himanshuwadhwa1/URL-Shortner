import * as React from 'react';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';
interface IFormContainerProps {
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
    const [fullUrl,setFullUrl] = React.useState<string>("");
    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            await axios.post(`${serverUrl}/shortUrl`,{
                fullUrl
            })
            setFullUrl("");
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='container mx-auto p-2'>
        <div className='bg-gradient-to-r from-slate-950 to-slate-300 my-8 rounded-xl text-white text-center bg-center'>
            <div className='w-full h-full rounded-xl p-20 backdrop-brightness-50'>
                <h2 className='text-white text-4xl text-center pb-4'>Url shortner</h2>
                <p className='text-white text-center text-xl py-3 font-extralight'>Paste your long URL to make it short</p>
                <p className='pb-4 text-sm font-thin'>Free tool to make your long URL short and use it whenever you want</p>
                <form onSubmit={handleSubmit}>
                    <div className='flex'>
                        <div className='relative w-full'>
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-slate-800">UrlShortner.link /</div>
                            <input type="text" name="" id="" required
                            className='block w-full p-4 ps-36 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500' 
                            placeholder='Your Link'
                            value={fullUrl} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setFullUrl(e.target.value)}} />
                            <button type='submit' 
                            className='absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300'>
                                Shorten URL</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default FormContainer;
